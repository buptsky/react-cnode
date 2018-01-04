const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const session = require('express-session');
const serverRender = require('./util/server-render');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  maxAge: 10 * 60 * 1000,
  name: 'sid',
  resave: false,
  saveUninitialized: false,
  secret: 'sky-react-cnode'
}));
app.use('/api/user', require('./util/handle-login'));
app.use('/api', require('./util/proxy'));
app.use(favicon(path.join(__dirname, '../favicon.ico')));

const isDev = process.env.NODE_ENV === 'development';

if (!isDev) {
  const serverEntry = require('../dist/server-entry');
  const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf8');
  app.use('/public', express.static(path.join(__dirname, '../dist')));
  app.get('*', function (req, res, next) {
    serverRender(serverEntry, template, req, res).catch(next);
  });
} else {
  const devStatic = require('./util/dev-static');
  devStatic(app);
}
// 处理错误
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err);
});

app.listen(8888, function () {
  console.log('server is listening on port 8888');
});
