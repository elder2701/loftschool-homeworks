// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

class MailList extends Component {
  render() {
    const { mails, className } = this.props;
    return (
      <div className={styles.container + ' ' + className}>
        {mails.map(mail => {
          const { id, link, title } = mail;
          return (
            <Link key={id} className={styles.link} to={link}>
              {title}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default MailList;
