// src/index.js（空文件即可，无需任何代码）
export default {
  async fetch(request, env, ctx) {
    // 无需手动处理路由，not_found_handling 会自动转发 404 到 index.html
    // 静态文件会自动从 public 目录加载
    return env.ASSETS.fetch(request);
  },
};