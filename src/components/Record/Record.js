import React, { PureComponent } from 'react';
import './Record.css';

class Record extends PureComponent {
  state = {
    isComplete: this.props.isComplete
  };

  handleClick = () => {
    let { isComplete } = this.state;
    let { id, text, saveData } = this.props;
    if (isComplete) {
      this.setState({ isComplete: false });
    } else {
      this.setState({ isComplete: true });
    }
    saveData({ id: id, isComplete: isComplete, text: text });
  };

  render() {
    let { id, text } = this.props;
    let { isComplete } = this.state;
    return (
      <div key={id.toString()} className="todo-item t-todo">
        <p className="todo-item__text">{text}</p>
        <span
          onClick={this.handleClick}
          className="todo-item__flag t-todo-complete-flag"
          data-todo-id={id.toString()}
        >
          {this.isComplete ? '[]' : '[X]'}
        </span>
      </div>
    );
  }
}

export default Record;
