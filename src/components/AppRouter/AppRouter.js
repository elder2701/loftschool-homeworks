import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import styles from './AppRouter.module.css';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';

class AppRouter extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={styles.navList + ' t-nav-list'}>
              <li className={styles.navElement}>
                <NavLink className="t-link-home" exact to="/app">
                  Home
                </NavLink>
              </li>
              <li className={styles.navElement}>
                <NavLink className="t-link-inbox" exact to="/app/inbox">
                  Inbox
                </NavLink>
              </li>
              <li className={styles.navElement}>
                <NavLink className="t-link-outbox" exact to="/app/outbox">
                  Outbox
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <h3 className={styles.title}>
              <Switch>
                <Route exact path="/app" render={() => 'Home'} />
                <Route exact path="/app/inbox/:id?" render={() => 'Inbox'} />
                <Route exact path="/app/outbox/:id?" render={() => 'Outbox'} />
              </Switch>
            </h3>
            <Switch>
              <Route exact path="/app" component={Home} />
              <Route exact path="/app/inbox" component={InboxList} />
              <Route exact path="/app/outbox" component={OutboxList} />
              <Route exact path="/app/inbox/:id" component={InboxMail} />
              <Route exact path="/app/outbox/:id" component={OutboxMail} />
              <Redirect to="/app" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AppRouter);
