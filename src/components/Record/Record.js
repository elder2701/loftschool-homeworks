import React, { PureComponent } from 'react';
import './Record.css';

class Record extends PureComponent {
  state = {
    isComplete: this.props.isComplete
  };

  handleClick = () => {
    const { isComplete } = this.state;
    const { id, text, updateData } = this.props;
    this.setState({ isComplete: !isComplete });
    updateData({ id, isComplete: !isComplete, text });
  };

  render() {
    const { text } = this.props;
    const { isComplete } = this.state;
    return (
      <div className="todo-item t-todo">
        <p className="todo-item__text">{text}</p>
        <span
          onClick={this.handleClick}
          className="todo-item__flag t-todo-complete-flag"
        >
          {isComplete ? '[X]' : '[]'}
        </span>
      </div>
    );
  }
}

export default Record;
