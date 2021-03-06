import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { AppContainer } from 'react-hot-loader'; // eslint-disable-line
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blue, indigo } from 'material-ui/colors';
import App from './views/App';
import { AppState, TopicStore } from './store/store';


const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: indigo,
    type: 'light'
  }
});

const initialState = window.__INITIAL__STATE__ || {}; // eslint-disable-line

const createApp = (IndexApp) => {
  class Main extends React.Component {
    // Remove the server-side injected CSS.
    componentDidMount() {
      const jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return <IndexApp />;
    }
  }

  return Main;
};

const appState = new AppState(initialState.appState);
const topicStore = new TopicStore(initialState.topicStore);
const root = document.getElementById('root');
const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate; // 去除warning
const render = (Compoment) => {
  renderMethod(
    <AppContainer>
      <Provider appState={appState} topicStore={topicStore}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Compoment />
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    </AppContainer>,
    root
  );
};

render(createApp(App));

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default; // eslint-disable-line
    render(createApp(NextApp));
  });
}
