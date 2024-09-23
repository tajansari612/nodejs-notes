const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json')

const app = express()
const port = 8000
//MiddleWare - Plugin
app.use(express.urlencoded({ extended: false }))  //to parse body

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