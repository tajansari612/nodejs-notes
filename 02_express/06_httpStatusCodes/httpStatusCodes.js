const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json')

const app = express()
const port = 8000

//MiddleWares - Plugins
app.use(express.urlencoded({ extended: false }))  //to parse body


//use case of custom middleware : for log generation
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
    if(!user){
      return res.status(404).json({msg : "user not found"})
    }
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
  const body = req.body
  if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
    return res.status(400).json({msg : "All Fields are necessary"})
  }
  users.push({ ...body, id: users.length + 1 })
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    return res.status(201).json({ "status": "success", id: users.length })
  })
  console.log("Body", body);

})

app.listen(port, console.log(`The server is started at ${port}`))