import React from 'react';
import axios from 'axios';
/* eslint-disable */
export default class TestApi extends React.Component {

  getTopics = () => {
    axios.get('/api/topics').then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  login = () => {
    axios.post('/api/user/login', {
      accessToken: "4fbadb6b-2fda-4108-85cc-b083749758d4"
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  markAll = () => {
    axios.post('/api/message/mark_all?needAccessToken=true').then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.getTopics}>topics</button>
        <button onClick={this.login}>login</button>
        <button onClick={this.markAll}>markAll</button>
      </div>
    );
  }
}
/* eslint-enable */
