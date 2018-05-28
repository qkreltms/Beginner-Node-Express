// const http = require('http')
// const hostname = 'localhost'
// const port = 3000
//
// var server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World')
// })
//
// server.listen(port, hostname, () => {
//   console.log(hostname+" "+port)
// })

var express = require('express')
var bodyParser = require('body-parser')
var app = express()

//들어오는 모든 데이터는 바이파서통해 들어옴
app.use(bodyParser.urlencoded({ extended: false }))
app.locals.pretty = true
app.set('views', './views')
app.set('view engine', 'jade')

//post방식은 body-parser필요
app.post('/form_receiver', (req, res) => {
  var title = req.body.title;
  //post방식은 body통해서 받음
  var description = req.body.description
  res.send(title+','+description)
})
app.get('/form_receiver', (req, res) => {
  var title = req.query.title;
  var description = req.query.description
  res.send(title+','+description)
})

app.get('/form', (req, res) => {
  res.render('form')
})

app.get('/template', (req, res) => {
  res.render('temp')
})
app.get('/topic/:id/:mode', (req, res) => {
  res.send(req.params.id+","+req.params.mode)
})
app.get('/topic/:id', (req, res) => {
  var topics = [
    'Javascript is...',
    'Nodejs is...;',
    'Express is...'
  ]

  res.send(topics[req.params.id]+', '+req.params.name)
})

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send("test")
})

app.listen(8080, () => {

})
