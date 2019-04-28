import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: '',
    toggleValues: {}
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = e => {
    let changeValue = e.target.value;
    this.setState({ inputValue: changeValue });
  };

  createNewRecordByEnter = e => {
    let { saveData } = this.props;
    if (e.key === 'Enter') {
      let { inputValue } = this.state;
      if (inputValue) {
        saveData({ id: this.getId, isComplete: false, text: inputValue });
        this.setState({ inputValue: '' });
      }
    }
  };

  createNewRecord = e => {
    let { saveData } = this.props;
    let { inputValue } = this.state;
    if (inputValue) {
      saveData({ id: this.getId(), isComplete: false, text: inputValue });
      this.setState({ inputValue: '' });
    }
  };

  render() {
    let { savedData } = this.props;
    let records = savedData.map(record => (
      <div key={record.id.toString()} className="todo-item t-todo">
        <p className="todo-item__text">{record.text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          onClick={this.toggleRecordComplete}
          data-todo-id={record.id.toString()}
        >
          {record.isComplete ? '[]' : '[X]'}
        </span>
      </div>
    ));

    let { inputValue } = this.state;
    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          <div className="todo-item todo-item-new">
            <input
              className="todo-input t-input"
              placeholder="Введите задачу"
              value={inputValue}
              onChange={this.handleChange}
              onKeyPress={this.createNewRecordByEnter}
            />
            <span onClick={this.createNewRecord} className="plus t-plus">
              +
            </span>
          </div>
          {records}
        </div>
      </Card>
    );
  }
}

export default withLocalstorage('todo-app', [])(Todo);
