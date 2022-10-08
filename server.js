const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log(req.url);
    function show(fileLocation, statusCode = 200) {
      fs.readFile(fileLocation, (err, data) => {
        res.writeHead(statusCode, { "content-type": "text/html" });
        res.write(data);
        res.end();
      });
    }

    if (req.url === "/") {
      show("View/index.html", 220);
    } else if (req.url === "/about" || req.url === "/about/") {
      show("View/about.html");
    } else if (req.url === "/contact") {
      show("View/contact.html");
    } else {
      show("View/err.html");
    }
  })
  .listen(3000, () => {
    console.log("success");
  });
