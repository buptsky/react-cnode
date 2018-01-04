import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Helmet from 'react-helmet';

@inject('appState')
@observer
export default class TopicList extends React.Component {
  static propTypes = {
    appState: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(1);
  }

  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.counter = 3;
        resolve(true);
      }, 2000);
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>this is a topic list</title>
          <meta name="description" content="this is description" />
        </Helmet>
        this is topic list
        {this.props.appState.msg}
      </div>
    );
  }
}
