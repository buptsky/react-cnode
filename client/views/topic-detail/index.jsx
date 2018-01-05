import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import Helmet from 'react-helmet';
import { inject, observer } from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';
import Container from '../layout/container';
import { topicDetailStyle } from './styles';
import Reply from './reply';

@inject((store) => {
  return {
    topicStore: store.topicStore
  };
})
@observer
class TopicDetail extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.topicStore.getTopicDetail(id);
  }

  render() {
    const { classes } = this.props;
    const id = this.props.match.params.id;
    const topic = this.props.topicStore.detailMap[id];
    if (!topic) {
      return (
        <Container>
          <section className={classes.loadingContainer}>
            <CircularProgress color="accent" />
          </section>
        </Container>
      );
    }
    return (
      <div>
        <Container>
          <Helmet>
            <title>{topic.title}</title>
          </Helmet>
          <header className={classes.header}>
            <h3>{topic.title}</h3>
          </header>
          <section className={classes.body}>
            <p dangerouslySetInnerHTML={{ __html: marked(topic.content) }} />
          </section>
        </Container>
        <Paper elevation={4} className={classes.replies}>
          <header className={classes.replyHeader}>
            <span>{`${topic.reply_count} 回复`}</span>
            <span>{`最新回复 ${topic.last_reply_at}`}</span>
          </header>
          <section>
            {
              topic.replies.map(reply => (<Reply reply={reply} key={reply.id} />))
            }
          </section>
        </Paper>
      </div>
    );
  }
}

export default withStyles(topicDetailStyle)(TopicDetail);
