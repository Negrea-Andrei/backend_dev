const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 8080;

app.get("*", (req, res) => {
  let filePath = "." + req.url + ".html";

  if (filePath === "./.html") {
    filePath = "./index.html";
  }

  filePath = path.join(__dirname, filePath);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile("./404.html", (err, content) => {
          res.status(404).end(content);
        });
      } else {
        res.status(500).end("Error: " + err.code);
      }
    } else {
      res.end(content);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
