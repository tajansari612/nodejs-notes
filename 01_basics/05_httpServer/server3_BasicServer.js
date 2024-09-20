const http = require('http')
const fs = require("fs")


const myServer = http.createServer((req, res) => {
  const log2 = `${Date.now()}: ${req.url} New req received\n`
  fs.appendFile('log2.txt', log2, (err, data) => {
    switch (req.url) {
      case '/':
        res.end('Homepage')
        break;

      case '/about':
        res.end("I am Taj Ansari")
        break

      case '/contact':
        res.end("gmail: tajansari612@gmail.com")
        break
        
      default:
        res.end("404 Not found!")
        break;
    }
  })
})

myServer.listen(8003, console.log("New server started!"))