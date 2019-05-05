import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class InboxMail extends PureComponent {
  render() {
    const {
      match: {
        params: { id }
      },
      data
    } = this.props;
    const mail = data.inbox.find(mail => mail.id === id);
    const { body, from } = mail;
    const infoMail = {
      body,
      email: from,
      prefix: 'From',
      className: 't-mail-from'
    };
    return <Mail {...infoMail} />;
  }
}

export default withData(InboxMail);
