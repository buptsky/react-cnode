const express = require('express');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const app = express();

const isDev = process.env.NODE_ENV === 'development';

if (!isDev) {
  const serverEntry = require('../dist/server-entry').default;
  const template = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');
  app.use('/public', express.static(path.join(__dirname, '../dist')));
  app.get('*', function (req, res) {
    console.log(req.url);
    const appString = ReactDOMServer.renderToString(serverEntry);
    res.send(template.replace('<!-- app -->', appString));
  });
} else {
  const devStatic = require('./util/dev-static');
  devStatic(app);
}

app.listen(8888, function () {
  console.log('server is listening on port 8888');
});