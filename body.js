const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
    console.log(`Called ${req.method} http://${host}:${port}`);

    let body = [];
    req.on("data", (chunk) => {
        body.push(chunk);
    }).on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(body);
        res.end(body);
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
