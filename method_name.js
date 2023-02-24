const http = require("http");

//Used this to write and read full req object
// const fs = require("fs");
// var util = require("util");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
    console.log(`Called ${req.method} http://${host}:${port}`);
    res.writeHead(200);
    res.write(`Called http://${host}:${port} \n`);
    res.end(`${req.method} method`);

    //Used this to write and read full req object
    // fs.writeFileSync("./data.json", util.inspect(req), "utf-8");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
