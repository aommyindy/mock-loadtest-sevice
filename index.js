var express = require('express')
var bodyParser = require('body-parser')
router = express.Router()

var app = express()
const port = 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.all('/*', function (req, res) {
  res.json({
    "type": "https://tools.ietf.org/html/rfc7231#section-6.5.13",
    "title": "Unsupported Media Type",
    "status": 415,
    "traceId": "|69f5fa6c-4641d4210f134304."
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})