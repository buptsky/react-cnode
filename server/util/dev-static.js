const axios = require('axios');
const webpack = require('webpack');
const path = require('path');
const MemoryFs = require('memory-fs');
const proxy = require('http-proxy-middleware');
const ReactDOMServer = require('react-dom/server');

const serverConfig = require('../../build/webpack.config.server');

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/index.html').then(res => {
      resolve(res.data);
    }).catch(reject => {
      reject(reject);
    });
  })
}

const Module = module.constructor;

const mfs = new MemoryFs();
const serverCompiler = webpack(serverConfig);
serverCompiler.outputFileSystem = mfs;
let serverBundle;
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err;
  // stats是一个buffer
  stats = stats.toJson();
  stats.errors.forEach(err => console.log(err));
  stats.warnings.forEach(warn => console.log(warn));

  const bundlePath = path.join(serverConfig.output.path, serverConfig.output.filename);

  console.log(bundlePath);
  
  const bundle = mfs.readFileSync(bundlePath, 'utf-8');
  const m = new Module();
  m._compile(bundle, 'server-entry.js');
  serverBundle = m.exports.default;
})

module.exports = function (app) {

  app.use('/public', proxy({
    target: 'http://localhost:8800'
  }));

  app.get('*', function (req, res) {
    getTemplate().then(tpl => {
      const content = ReactDOMServer.renderToString(serverBundle);
      res.send(tpl.replace('<!-- app -->', content));
    });
  });
}