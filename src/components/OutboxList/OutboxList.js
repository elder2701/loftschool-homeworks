// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React, { PureComponent } from 'react';
import MailList from '../MailList';
import truncate from 'lodash/truncate';
import { withData } from '../../context/Data';

class OutboxList extends PureComponent {
  render() {
    const {
      data: { outbox }
    } = this.props;

    return (
      <MailList
        className="t-outbox-list"
        mails={outbox.map(({ id, body }) => ({
          title: truncate(body, { length: 55 }),
          link: `/app/outbox/${id}`,
          id
        }))}
      />
    );
  }
}
export default withData(OutboxList);
