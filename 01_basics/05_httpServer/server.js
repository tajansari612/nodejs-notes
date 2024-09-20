const http = require('http')

const myServer = http.createServer((req, res) => {
  console.log("New req received!!!");
  res.end("Hello from server")
})

myServer.listen(8000, () => console.log("Server is started"))