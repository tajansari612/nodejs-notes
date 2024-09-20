const http = require('http')
const fs = require('fs')
const url = require("url")

const myServer = http.createServer((req, res) =>{
  if(req.url === '/favicon.ico') return res.end()  //to remove the default favicon req
  
  // const myUrl = url.parse(req.url)   //without query parsing
  const myUrl = url.parse(req.url, true)   //with query parsing
  console.log(myUrl);
  

  const log = `${Date.now()}: ${req.url} New request received\n` 
  fs.appendFile('log.txt', log, (err, data) =>{
    switch (req.url) {
      case '/':
        res.end('Homepage of Working of URL')
        break;
  
      case '/about':
        res.end("I am Working of URL")
        break
  
      case '/contact':
        res.end("gmail: workingOfURL@gmail.com")
        break
        
      default:
        res.end("404 Not found!")
        break;
    }
  })
})

myServer.listen(8000, console.log("Server is listening to port ", 8000))