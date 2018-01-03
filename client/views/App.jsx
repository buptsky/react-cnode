import React from 'react';
import Route from '../config/router';

export default class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return [
      <div>app</div>,
      <Route />
    ];
  }
}
