import Http from '../../http'

// 用户登录
export const login = function(data: { username: string, password_hash: string }) {
    return Http.post('/web/login',data)
}
// 注册
export const register = function(data: any) {
    return Http.post('/web/login/register',data)
}

