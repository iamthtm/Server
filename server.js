var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var data = [
  {
    name: 'Tak',
    phone: '029110020'
  }
]

app.get('/data', function (req, res) {
  res.send(data)
})

app.post('/data', function (req, res) {
  console.log(req.body)
  data.push(req.body)
  res.send(data)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
