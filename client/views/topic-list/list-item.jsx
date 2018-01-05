import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import dataFormat from 'dataformat';
import { ListItem, ListItemText, ListItemAvatar } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import { topicPrimaryStyle, topicSecondaryStyle } from './styles';
import { tabs } from '../../util/variable-define';

const Primary = ({ topic, classes }) => {
  const classNames = cx({
    [classes.tab]: true,
    [classes.top]: topic.top
  });
  return (
    <div className={classes.root}>
      <span className={classNames}>{topic.top ? '置顶' : tabs[topic.tab]}</span>
      <span className={classes.title}>{topic.title}</span>
    </div>
  );
};

const StyledPrimary = withStyles(topicPrimaryStyle)(Primary);

Primary.propTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const Secondary = ({ topic, classes }) => (
  <React.Fragment>
    <span className={classes.userName}>{topic.author.loginname}</span>
    <span className={classes.count}>
      <span className={classes.accentColor}>{topic.reply_count}</span>
      <span>/</span>
      <span>{topic.visit_count}</span>
    </span>
    <span>创建时间: {dataFormat(topic.create_at, 'yy年mm月dd日')}</span>
  </React.Fragment>
);

Secondary.propTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

const StyledSecondary = withStyles(topicSecondaryStyle)(Secondary);

const TopicListItem = ({ onClick, topic }) => (
  <ListItem button onClick={onClick}>
    <ListItemAvatar>
      {/*<Avatar src={topic.image} />*/}
      <Avatar src={topic.author.avatar_url} />
    </ListItemAvatar>
    <ListItemText
      primary={<StyledPrimary topic={topic} />}
      secondary={<StyledSecondary topic={topic} />}
      topic={topic}
    />
  </ListItem>
);

TopicListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  topic: PropTypes.object.isRequired
};

export default TopicListItem;
