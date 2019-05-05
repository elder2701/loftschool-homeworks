import React, { Component } from 'react';
import styles from './Mail.module.css';

class Mail extends Component {
  render() {
    const { body, email, prefix, className } = this.props;
    return (
      <div className={styles.container}>
        <p className={className}>
          {prefix}: <b>{email}</b>
        </p>
        <p className="t-mail-body">{body}</p>
      </div>
    );
  }
}

export default Mail;
