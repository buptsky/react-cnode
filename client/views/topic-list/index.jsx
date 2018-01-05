import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import Helmet from 'react-helmet';
import Tabs, { Tab } from 'material-ui/Tabs';
import { CircularProgress } from 'material-ui/Progress';
import List from 'material-ui/List';
import queryString from 'querystring';
import Container from '../layout/container';
import TopicListItem from './list-item';
import { tabs } from '../../util/variable-define';

@inject((stores) => {
  return {
    appState: stores.appState,
    topicStore: stores.topicStore
  };
})
@observer
export default class TopicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.topicStore.fetchTopics(this.getTab());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.props.topicStore.fetchTopics(this.getTab(nextProps.location.search));
    }
  }

  getTab = (search) => {
    const query = queryString.parse(search || this.props.location.search);
    return query['?tab'] || 'all';
  }

  asyncBootstrap() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.props.appState.counter = 3;
        resolve(true);
      }, 2000);
    });
  }

  changeTab = (event, val) => {
    this.props.history.push({
      pathname: '/list',
      search: `?tab=${val}`
    });
  }

  listItemClick = (topic) => {
    console.log(topic);
    this.props.history.push(`/detail/${topic.id}`);
  }

  render() {
    const { topicStore } = this.props;
    const topicList = topicStore.topics;
    const syncingTopics = topicStore.syncing;
    const tab = this.getTab();
    return (
      <Container>
        <Helmet>
          <title>this is a topic list</title>
          <meta name="description" content="this is description" />
        </Helmet>
        <Tabs
          value={tab}
          onChange={this.changeTab}
          scrollable
          scrollButtons="auto"
        >
          {
            Object.keys(tabs).map((item) => {
              return <Tab key={item} label={tabs[item]} value={item} />;
            })
          }
        </Tabs>
        <List>
          {
            topicList.map((item) => {
              return (
                <TopicListItem
                  key={item.id}
                  onClick={() => {
                    this.listItemClick(item);
                  }}
                  topic={item}
                />);
            })
          }
        </List>
        {
          syncingTopics && (
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px 0' }}>
              <CircularProgress color="accent" size={50} />
            </div>
          )
        }
      </Container>
    );
  }
}

TopicList.wrappedComponent.propTypes = {
  appState: PropTypes.object.isRequired,
  topicStore: PropTypes.object.isRequired
};
