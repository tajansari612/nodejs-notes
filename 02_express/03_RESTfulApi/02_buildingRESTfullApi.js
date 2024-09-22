const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json')

const app = express()
const port = 8000
//MiddleWare - Plugin
app.use(express.urlencoded({extended : false}))  //to parse body

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
    const user = users.find((user) => (user.id === id))
    return res.json(user)
  })
  .patch((req, res) =>{
    //Edit user with id
    return res.json({ "Status" : "Pending"})
  })
  .delete((req, res) =>{
    //Delete user with id
    return res.json({ "Status" : "Pending"})
  })

app.post('/api/users', (req, res) =>{
  //to add new user
  let body = req.body
  users.push({...body, id : users.length + 1})
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) =>{
    return res.json({"status" : "success", id: users.length})
  })
  console.log("Body", body);
  
})

  app.listen(port, console.log(`The server is started at ${port}`))