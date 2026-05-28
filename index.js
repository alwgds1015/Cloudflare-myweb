export default {
  async fetch(request, env, ctx) {
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>My Worker</title>
    </head>
    <body>
      <h1>Hello from Cloudflare Worker!</h1>
      <p>✅ 部署成功</p>
    </body>
    </html>
    `;
    return new Response(html, {
      headers: { "Content-Type": "text/html" }
    });
  }
};
