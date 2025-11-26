export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    // 处理 API 请求
    if (url.pathname === "/api/name") {
      return new Response(JSON.stringify({ name: "Cloudflare" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // 处理静态资源（通过 ASSETS binding）
    // 如果配置了 [assets]，env.ASSETS 会自动处理静态文件
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    // 如果没有 ASSETS binding，返回 404
    return new Response("Not Found", { status: 404 });
  },
} satisfies ExportedHandler;