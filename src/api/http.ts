import axios, { AxiosRequestHeaders, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useUserStore } from "../store/user";
import { layer } from '@layui/layui-vue';
import router from '../router'

type TAxiosOption = {
    timeout: number;
    baseURL: string;
}
 
const config: TAxiosOption = {
    timeout: 15000, // 增加到15秒
    baseURL: import.meta.env.VITE_API_URL+"/api"
}
 
class Http {
    service;
    constructor(config: TAxiosOption) {
        this.service = axios.create(config)

        /* 请求拦截 */
        this.service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            const userInfoStore = useUserStore();
            config.headers['Web-Trader-UUID'] = import.meta.env.VITE_Web_Trader_UUID as string
            if (userInfoStore.token) {
                
              
                config.headers['session-token'] = userInfoStore.token as string
                
            } else {
                if(router.currentRoute.value.path.indexOf('system')>=0) {
                    router.push('/userlogin');
                }
            }
            return config
        }, error => {
            return Promise.reject(error);
        })

        /* 响应拦截 */
        this.service.interceptors.response.use((response: AxiosResponse<any>) => {
          
            // 检查响应是否包含success字段（后端标准格式）
            if ('success' in response.data) {
                // 如果是登录相关接口并且返回成功，直接返回完整响应数据
                if ((response.config.url?.includes('/login') || response.config.url?.includes('/adminlogin')) && response.data.success) {
                    return response.data;
                }
                
                return response.data;
            }
            // 处理传统的包含code字段的响应
            switch (response.data.code) {
                case 200:
                    return response.data;
                case 500:
                    return response.data;
                case 99998:
                    layer.confirm(
                    '会话超时, 请重新登录', 
                    { icon : 2, yes: function(){
                        router.push('/userlogin');
                        layer.closeAll()
                    }});
                    return response.data;
                default:
                    return response.data;
            }
        }, error => {
            // 错误处理
            if (error.response) {
                // 服务器返回错误状态码
                const status = error.response.status;
                const message = error.response.data?.message || error.response.data?.msg || '请求失败';
                
                if (status === 401) {
                    // layer.confirm(
                    //     "You haven‘t logged in yet, please log in first", 
                    //     { icon : 2, yes: function(){
                    //         router.push('/userlogin');
                    //         layer.closeAll()
                    //     }}
                    // );
                } else if (status === 403) {
                    layer.msg('您没有权限执行此操作', { icon: 2 });
                } else if (status === 404) {
                    layer.msg('请求的资源不存在', { icon: 2 });
                } else if (status >= 500) {
                    layer.msg('服务器内部错误', { icon: 2 });
                } else {
                   // layer.msg(message, { icon: 2 });
                }
            } else if (error.request) {
                // 请求发出但没有收到响应
                layer.msg('网络连接失败，请检查网络设置', { icon: 2 });
            } else {
                // 请求配置出错
                layer.msg('请求配置错误', { icon: 2 });
            }
            return Promise.reject(error)
        })
    }

    /* GET 方法 */
    get<T>(url: string, params?: object, _object = {}): Promise<any> {
        return this.service.get(url, { params, ..._object })
    }
    /* POST 方法 */
    post<T>(url: string, params?: object, _object = {}): Promise<any> {
        return this.service.post(url, params, _object)
    }
    /* PUT 方法 */
    put<T>(url: string, params?: object, _object = {}): Promise<any> {
        return this.service.put(url, params, _object)
    }
    /* DELETE 方法 */
    delete<T>(url: string, params?: any, _object = {}): Promise<any> {
        return this.service.delete(url, { params, ..._object })
    }
}

export default new Http(config)