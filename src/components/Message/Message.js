import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div>
        <span className="message">{this.props.text}</span>
      </div>
    );
  }
}

export default Message;
