import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import styles from './AppRouter.module.css';
import Home from '../Home';
import InboxList from '../InboxList';
// import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
// import OutboxMail from '../OutboxMail';

class AppRouter extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navElement}>
                <NavLink exact to="/app">
                  Home
                </NavLink>
              </li>
              <li className={styles.navElement}>
                <NavLink exact to="/app/inbox">
                  Inbox
                </NavLink>
              </li>
              <li className={styles.navElement}>
                <NavLink exact to="/app/outbox">
                  Outbox
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <h3 className={styles.title}>
              <Switch>
                <Route exact path="/app" render={() => 'Home'} />
                <Route exact path="/app/Inbox" render={() => 'Inbox'} />
                <Route exact path="/app/Outbox" render={() => 'Outbox'} />
              </Switch>
            </h3>
            <Switch>
              <Route exact path="/app" component={Home} />
              <Route exact path="/app/inbox" component={InboxList} />
              <Route exact path="/app/outbox" component={OutboxList} />
              <Redirect to="/app" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AppRouter);
