// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
import React, { component } from 'react';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';

class AppRouter extends component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <nav className="nav">
            <ul className="navList">
              <li className="navElement" /> {/*добавить элементы навигации*/}
            </ul>
          </nav>
          <div className="content">
            <h3 className="title" />
            {/* добавить заголовок; ниже идет MailList*/}
          </div>
        </div>
      </div>
    );
  }
}

export default AppRouter;
