const http = require("http");
const url = require("url");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8084;

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;
  const jsHeader = { "Content-Type": "application/javascript" };
  switch (pathname) {
    case "/public/bundle.js":
      res.writeHead(200, jsHeader);
      return fs.createReadStream("./public/bundle.js").pipe(res);
    default:
      res.writeHead(200, {
        "Content-Type": "text/html",
        Link:
          '<http://localhost:8084/public/bundle.js>; rel="fragment-script"'
      });
      return res.end("");
  }
});

server.listen(8084, () => {
  console.log(`SPA Fragment Server started at http://${hostname}:${port}`);
});