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
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';

class AppRouter extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <nav className="nav">
            <ul className="navList">
              <li className="navElement">
                <NavLink exact to="/app">
                  Home
                </NavLink>
              </li>
              <li className="navElement">
                <NavLink exact to="/app/inbox">
                  Inbox
                </NavLink>
              </li>
              <li className="navElement">
                <NavLink exact to="/app/outbox">
                  Outbox
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="content">
            <h3 className="title" />
            <BrowserRouter>
              <Switch>
                <Route exact path="/app" component={Home} />
                <Route exact path="/app/inbox" component={InboxList} />
                <Route exact path="/app/outbox" component={OutboxList} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default AppRouter;
