import { observable, toJS, computed, action, extendObservable } from 'mobx';
import { topicSchema } from '../util/variable-define';
import { get } from '../util/http';

const createTopic = topic => Object.assign({}, topicSchema, topic);

class Topic {
  // @observable syncing = false;

  constructor(data) {
    extendObservable(this, data);
  }
}


class TopicStore {
  @observable topics;
  @observable details;
  @observable syncing;

  constructor({ topics = [], syncing = false, details = [] } = {}) {
    console.log(topics);
    this.syncing = syncing;
    this.topics = topics.map(topic => new Topic(createTopic(topic)));
    this.details = details.map(topic => new Topic(createTopic(topic)));
  }

  getTopics(topics) {
    this.topics = topics;
  }

  getDetail(details) {
    this.details = details;
  }

  addTopic(topic) {
    this.topics.push(new Topic(createTopic(topic)));
  }

  @computed get detailMap() {
    return this.details.reduce((ret, detail) => {
      ret[detail.id] = detail;
      return ret;
    }, {});
  }

  @action
  fetchTopics(tab) {
    return new Promise((resolve, reject) => {
      this.syncing = true;
      this.topics = [];
      get('/topics', {
        mdrender: false,
        tab
      }).then((res) => {
        const ret = [];
        res.data.forEach((topic) => {
          ret.push(new Topic(createTopic(topic)));
        });
        this.getTopics(ret);
        this.syncing = false;
        resolve();
      }).catch((err) => {
        reject(err);
        this.syncing = false;
      });
    });
  }

  @action
  getTopicDetail(id) {
    return new Promise((resolve, reject) => {
      if (this.detailMap[id]) {
        resolve(this.detailMap[id]);
      } else {
        get(`/topic/${id}`, {
          mdrender: false
        }).then((res) => {
          this.details.push(new Topic(createTopic(res.data)));
          resolve();
        }).catch((err) => {
          reject(err);
        });
      }
    });
  }
}

export default TopicStore;
