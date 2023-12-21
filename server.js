//*import the elements
const http = require("http");
const path = require("path");
const fs = require("fs");

//!Create a server that takes a request and sends a response
const server = http.createServer((req, res) => {
  //*create a path prom the request url
  let filePath = "." + req.url + ".html";

  //?if the path is empty then redirect to the index page
  if (filePath === "./.html") {
    filePath = "./index.html";
  }

  //*Make the path from the system files and directory name
  filePath = path.join(__dirname, filePath);

  //*Read the file from the path and take in count the error and content
  fs.readFile(filePath, (err, content) => {
    //?if there is an error redirect to the file 404.index or send a 500 response
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile("./404.html", (err, content) => {
          res.end(content);
        });
      } else {
        res.end("Error: " + err.code);
      }
      //*If its ok then send back a response 200 and the content of the file from the path
    } else {
      res.end(content);
    }
  });
});

//*Create the port the server will listen to
const PORT = 8080;

//!Add the event listener for the server to listen to
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

//*Start learning about databases
//*Continue with mongodb
//*Learn CRUD operation on the mongodb database
//*Learn aggregation pipeline in MONGO.DB