// Cloudflare Workers 入口文件
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // 简单的响应，返回项目信息
  const response = new Response(
    JSON.stringify({
      message: 'Stock Web Application Worker',
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString()
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
  return response;
}