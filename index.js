const express = require('express')
const router = require('./api/routes');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use('/', express.static('app'));
const corsMiddleware = function corsMiddleware(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, HEAD, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    return res.end();
  }
  return next();
}

app.use('/', corsMiddleware, express.static('app'));
app.use(router)
app.use(corsMiddleware)

app.listen(3000, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Listening to port 3000')
  }
})

