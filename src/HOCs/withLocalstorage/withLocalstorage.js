import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (name, data) => Todo => {
  return class extends Component {
    state = {
      todoList: data
    };

    handleSaveData = dataSave => {
      let { todoList } = this.state;
      this.setState({ todoList: todoList.push(dataSave) });
    };

    componentDidMount() {
      let todo = load(name);
      this.setState(todo);
      console.log('hello1');
    }

    componentWillUnmount() {
      let { todoList } = this.state;
      save(name, todoList);
    }

    render() {
      let { todoList } = this.state;
      return <Todo savedData={todoList} saveData={this.handleSaveData} />;
    }
  };
};

export default withLocalstorage;
