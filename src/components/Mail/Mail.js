import React, { Component } from 'react';
import styles from './Mail.module.css';

class Mail extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p className="t-mail-to">
          To: <b />
        </p>
        <p className="t-mail-body" />
      </div>
    );
  }
}

export default Mail;
