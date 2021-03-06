const axios = require('axios');
const webpack = require('webpack');
const path = require('path');
const MemoryFs = require('memory-fs');
const proxy = require('http-proxy-middleware');

const serverRender = require('./server-render');

const serverConfig = require('../../build/webpack.config.server');

const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:8888/public/server.ejs').then(res => {
      resolve(res.data);
    }).catch(reject => {
      reject(reject);
    });
  })
}

// const Module = module.constructor;
const NativeModule = require('module');
const vm = require('vm');


const getModuleFromString = (bundle, filename) => {
  const m = {exports: {}};
  const wrapper = NativeModule.wrap(bundle);
  const script = new vm.Script(wrapper, {filename: filename, displayErrors: true});
  const result = script.runInThisContext();
  result.call(m.exports, m.exports, require, m);
  return m;
}

const mfs = new MemoryFs();
const serverCompiler = webpack(serverConfig);
serverCompiler.outputFileSystem = mfs;
let serverBundle, createStoreMap;

serverCompiler.watch({}, (err, stats) => {
  if (err) throw err;
  // stats是一个buffer
  stats = stats.toJson();
  stats.errors.forEach(err => console.log(err));
  stats.warnings.forEach(warn => console.log(warn));

  const bundlePath = path.join(serverConfig.output.path, serverConfig.output.filename);

  console.log(bundlePath);

  const bundle = mfs.readFileSync(bundlePath, 'utf-8');
  // const m = new Module();
  // m._compile(bundle, 'server-entry.js');
  const m = getModuleFromString(bundle, 'server-entry.js');
  serverBundle = m.exports;
})

module.exports = function (app) {

  app.use('/public', proxy({
    target: 'http://localhost:8800'
  }));

  app.get('*', function (req, res, next) {
    if (!serverBundle) {
      return res.send('waiting for compile, refresh later');
    }
    getTemplate().then(tpl => {
      return serverRender(serverBundle, tpl, req, res);
    }).catch(err => {
      next(err);
    });
  });
}
