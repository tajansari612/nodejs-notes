//creating log

const http = require('http')
const fs = require('fs')


const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New req received\n`
  fs.appendFile('log.txt', log, (err, data) => {
    res.end('Hello from server again!')
  })
})


myServer.listen(8001, () => console.log("New server started!"))