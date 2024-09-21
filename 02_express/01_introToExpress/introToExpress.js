// const http = require('http')
// const fs = require("fs")   //express imports itself if not
const express = require('express')

const app = express()
// const myServer = http.createServer(app)

app.get('/', (req, res) => {
  return res.send("Homepage")
})

app.get('/about', (req,res) =>{
  return res.send(`Hi,  ${req.query.name} you are ${req.query.age} years old`)
})

app.get('/contact', (req, res) =>{
  return res.send('gmai: tajansari612@gmail.com')
})

app.get('/signup', (req, res) =>{
  return res.send('This is signup form,\nPlease fill the form')
})
app.post('/signup', (req, res) =>{
  //db quiry
  return res.send("Signed Up!")

})

// myServer.listen(8000, console.log("server is started at port ", 8000))
app.listen(8000, console.log("server is started at port ", 8000))