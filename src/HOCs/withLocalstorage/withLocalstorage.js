import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (name, data) => Todo => {
  return class extends Component {
    state = {
      todoList: data
    };

    handleSaveData = dataSave => {
      const { todoList } = this.state;
      this.setState({ todoList: [...todoList, dataSave] });
      save(name, this.state.todoList);
    };

    handleUpdateData = dataUpdate => {
      const { todoList } = this.state;
      const { id, isComplete, text } = dataUpdate;
      for (let i = 0; i < todoList.length; i++) {
        if (id === todoList[i].id) {
          todoList[i] = { id, text, isComplete };
        }
      }
      this.setState({ todoList });
      save(name, this.state.todoList);
    };

    componentDidMount() {
      let todo = load(name);
      if (!todo) {
        save(name, data);
      }
      this.setState({ todoList: todo });
    }

    render() {
      let { todoList } = this.state;
      return (
        <Todo
          savedData={todoList}
          saveData={this.handleSaveData}
          updateData={this.handleUpdateData}
        />
      );
    }
  };
};

export default withLocalstorage;
