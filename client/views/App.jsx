import React from 'react';
import Route from '../config/router';

export default class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return [
      <div key="app">app</div>,
      <Route key="router" />
    ];
  }
}
