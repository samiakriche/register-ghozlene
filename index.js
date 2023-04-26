const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = 8081;
const port =  8081;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});