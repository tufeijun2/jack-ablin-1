export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    // 处理 API 请求
    if (url.pathname.startsWith("/api/")) {
      // 这里可以添加自定义 API 处理逻辑
      if (url.pathname === "/api/name") {
        return new Response(JSON.stringify({ name: "Cloudflare" }), {
          headers: { "Content-Type": "application/json" },
        });
      }
      // 其他 API 请求可以在这里处理
      return new Response("API Not Found", { status: 404 });
    }

    // 处理静态资源（通过 ASSETS binding）
    // 当配置了 [assets] 时，env.ASSETS 会自动处理静态文件
    // 包括 index.html 和所有静态资源（JS、CSS、图片等）
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    // 如果没有 ASSETS binding，返回 404
    return new Response("Not Found - ASSETS binding not available", { status: 404 });
  },
} satisfies ExportedHandler;