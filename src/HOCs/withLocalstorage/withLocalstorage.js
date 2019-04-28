import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (name, data) => Todo => {
  return class extends Component {
    state = {
      todoList: data
    };

    handleSaveData = dataSave => {
      const { todoList } = this.state;
      const updateList = [...todoList, dataSave];
      this.setState({ todoList: updateList });
      console.log(updateList);
      save(name, updateList);
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
      console.log(todoList);
      save(name, todoList);
    };

    componentDidMount() {
      let todo = load(name);
      if (!todo) {
        save(name, data);
      }
      if (todo) {
        this.setState({ todoList: todo });
      }
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
