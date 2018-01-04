import { observable, computed, action } from 'mobx';

export default class AppState {
  constructor({ counter, name } = { counter: 0, name: 'sky' }) {
    this.counter = counter;
    this.name = name;
  }

  @observable counter;
  @observable name;

  @computed
  get msg() {
    return `${this.name} say count is ${this.counter}`;
  }

  @action
  add() {
    this.counter += 1;
  }

  toJson() {
    return {
      counter: this.counter,
      name: this.name
    };
  }
}

