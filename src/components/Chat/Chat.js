import React from 'react';
import Message from '../Message';

class Chat extends React.Component {
  state = { messages: [], messageInput: '' };
  changeInputMessage = e => {
    this.setState({ messageInput: e.target.value });
  };

  sendMessageOnEnter = e => {
    if (e.keyCode === 13) {
      let localMessages = [...this.state.messages];
      localMessages.push({ text: this.state.messageInput });
      this.setState({
        messages: localMessages,
        messageInput: ''
      });
    }
  };

  render() {
    return (
      <div>
        <div className="chat">
          {this.state.messages.map(message => (
            <Message text={message.text} />
          ))}
        </div>
        <input
          type="text"
          value={this.state.messageInput}
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyDown={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
