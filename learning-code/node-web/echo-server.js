const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  if (req.method === "POST" && req.url === "/echo") {
    let body = [];

    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        body = Buffer.concat(body).toString().split("-");

        const day = parseInt(body[0]);
        const month = parseInt(body[1] - 1);
        const year = parseInt(body[2]);

        const Birthday = new Date(year, month, day);
        console.log(Birthday.toString().split(" "));
        res.end(Birthday.toString().split(" ")[0]);
      });
  } else {
    res.statusCode = 400;
    res.end();
  }
});

server.listen(8000);
console.log("Servidor en la url http://localhost:8000");
