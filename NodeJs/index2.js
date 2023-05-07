const http = require("http");

let data = { message: "My new message." };
// create a server object
const server = http.createServer((req, res) => {
  // res.write('Hello World!'); // write a response

  // handle GET requests
  if (req.method === "GET" && req.url === "/api/message") {
    // res.setHeader('Content-Type', 'application/json');
    // return the data object as a JSON string
    res.statusCode = 200;
    res.end(JSON.stringify(data));
  } else if (req.method === "POST" && req.url === "/api/message") {
    console.log(req);
    // read the request body and parse as a JSON object
    let requestBody = "";
    req.on("data", (chunk) => {
      requestBody += chunk.toString();
    });
    req.on("end", () => {
      const newData = JSON.parse(requestBody);
      console.log(newData);
      // update the simple object with the new data
      data = { ...data, ...newData };
      res.statusCode = 201;
      res.end(JSON.stringify(data));
    });
  } else {
    // handle all other requests
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

// define the port number
const PORT = 9080;

// start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
