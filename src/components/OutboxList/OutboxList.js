// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React, { Component } from 'react';
import MailList from '../MailList';

class OutboxList extends Component {
  render() {
    console.log('outbox');
    return <div />;
  }
}
export default OutboxList;
