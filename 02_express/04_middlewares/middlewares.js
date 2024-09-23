
// Using middleware
// Express is a routing and middleware web framework that has minimal 
// functionality of its own: An Express application is essentially a series of 
// middleware function calls.

// Middleware functions are functions that have access to the request object 
// (req), the response object (res), and the next middleware function in the 
// application’s request-response cycle. The next middleware function is 
// commonly denoted by a variable named next.


// Middleware functions can perform the following tasks:
//01) Execute any code.
//02) Make changes to the request and the response objects.
//03) End the request-response cycle.
//04) Call the next middleware function in the stack.
//05) If the current middleware function does not end the request-response cycle, 
//    it must call next() to pass control to the next middleware function. 
//    Otherwise, the request will be left hanging.


// An Express application can use the following types of middleware:
//01) Application-level middleware
//02) Router-level middleware
//03) Error-handling middleware
//04) Built-in middleware
//05) Third-party middleware

// You can load application-level and router-level middleware with an optional 
// mount path. You can also load a series of middleware functions together, 
// which creates a sub-stack of the middleware system at a mount point.


const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json')

const app = express()
const port = 8000

//MiddleWares - Plugins
app.use(express.urlencoded({ extended: false }))  //to parse body

//custom middlewares
app.use((req, res, next) => {
  console.log("Hello from middleware 1");
  req.MyName = "Taj Ansari"  //changes made req object persist throughout the cycle
  next()   //if this is not present then the req is stopped here and no response
           // is further generated
})
app.use((req, res, next) => {
  console.log("Hello from middleware 2", req.MyName);
  next()   //if this is not present then the req and res cycle will stopped here
           // and no routes will be executed
})

//use case of middle : for log generation
app.use((req, res, next) =>{
  const log = `${Date.now()}: ${req.ip} ${req.method} ${req.path} new req received\n`
  fs.appendFile('log.txt', log, (err, data) => {
    next()   //after all the operations done called the next middleware using next()
  })
})
//Routes
app.get('/users', (req, res) => {
  const html = `
  <ul>
    ${users.map((user) => (`<li>${user.id}. ${user.first_name}</li>`)).join("")}
  </ul>
  `
  res.send(html)
})
app.get("/api/users", (req, res) => {
  return res.json(users)
})

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id)    // getting id
    const user = users.find((user) => (user.id === id))  //finding user
    return res.json(user)
  })
  .patch((req, res) => {
    //Edit user with id
    const id = Number(req.params.id)    // getting id
    const user = users.find((user) => (user.id === id)) //finding user
    let body = req.body
    if(body.first_name) users[id-1].first_name = body.first_name
    if(body.last_name) users[id-1].last_name = body.last_name
    if(body.email) users[id-1].email = body.email
    if(body.gender) users[id-1].gender = body.gender
    if(body.job_title) users[id-1].job_title = body.job_title
    
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
      return res.json({ "status": "success", id: id })
    })
  })
  .delete((req, res) => {
    //Delete user with id
    const id = Number(req.params.id)
    users[id-1] = {}
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
      return res.json({ "status": "success", id: id })
    })
  })

app.post('/api/users', (req, res) => {
  //to add new user
  let body = req.body
  users.push({ ...body, id: users.length + 1 })
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    return res.json({ "status": "success", id: users.length })
  })
  console.log("Body", body);

})

app.listen(port, console.log(`The server is started at ${port}`))