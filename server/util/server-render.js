const serialize = require('serialize-javascript');
const ejs = require('ejs');
const asyncBootstrap = require('react-async-bootstrapper').default;
const ReactDOMServer = require('react-dom/server');
const Helmet = require('react-helmet').default;

const SheetsRegistry = require('react-jss').SheetsRegistry;
const create = require('jss').create;
const preset = require('jss-preset-default').default;
const createMuiTheme = require('material-ui/styles').createMuiTheme;
const createGenerateClassName = require('material-ui/styles').createGenerateClassName;
const colors = require('material-ui/colors');

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    console.log(stores[storeName]);
    result[storeName] = stores[storeName].toJson();
    return result;
  }, {});
}

module.exports = (bundle, tpl, req, res) => {
  return new Promise((resolve, reject) => {
    const createStoreMap = bundle.createStoreMap;
    const createApp = bundle.default;
    const routerContext = {};
    const stores = createStoreMap();
    // material ui server render
    const sheetsRegistry = new SheetsRegistry();
    const theme = createMuiTheme({
      palette: {
        primary: colors.blue,
        secondary: colors.indigo,
        type: 'light'
      }
    });
    const jss = create(preset());
    const generateClassName = createGenerateClassName();
    // 传递参数
    const app = createApp(stores, routerContext, sheetsRegistry, jss, generateClassName, theme, req.url);
    // 处理渲染时的状态异步问题
    asyncBootstrap(app).then(() => {
      // 处理redirect跳转
      const content = ReactDOMServer.renderToString(app);
      const state = getStoreState(stores);
      if (routerContext.url) {
        console.log(routerContext.url);
        res.status(302).setHeader('Location', routerContext.url);
        res.end();
        return;
      }
      const helmet = Helmet.rewind();
      const html = ejs.render(tpl, {
        appString: content,
        initialState: serialize(state),
        meta: helmet.meta.toString(),
        title: helmet.title.toString(),
        style: helmet.style.toString(),
        link: helmet.link.toString(),
        materialCss: sheetsRegistry.toString()
      });
      res.send(html);
      resolve();
    }).catch((err) => {
      reject(err);
    });
  });
}
