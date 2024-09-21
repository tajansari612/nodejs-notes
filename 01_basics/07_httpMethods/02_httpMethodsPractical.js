const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req, res) =>{

  if(req.url === '/favicon.ico') return res.end();


  const log = `${Date.now()}: ${req.method} ${req.url} new req received\n`
  fs.appendFile('log.txt', log, (err, data) => {

    switch (req.url) {
      case '/':
        res.end('Homepage')
        break;
    
      case '/about':
        res.end('I am Taj Ansari')
        break;

      case '/contact':
        res.end('gmail: tajansari612@gmail.com')
        break;

      case '/signup':
        if(req.method === "GET") res.end("Please fill the signup form");
        else if(req.method === "POST"){
          //Checking in db
          res.end("You are singned up!")
        }
        break;

      default:
        res.end("404 not found!")
        break;
    }
  })
})

myServer.listen(8000, console.log("server is listening to port ",8000))