const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const views = require('./views/views')

const app = express()

// Parses incoming text data
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// Directs to the folder 'public' for static resources
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send(views.getForm())
})

app.post('/', (req, res) => {
  const input = Object.values(req.body)[0]
  res.send(views.getForm() + views.getResult(input))
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})
