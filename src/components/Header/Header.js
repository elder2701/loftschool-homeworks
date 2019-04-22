import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, authorize }) => {
          return isAuthorized ? (
            <div className="header__content">
              <div className="header-menu">
                <p className="header-menu__email header-email t-header-email">
                  {authorize}
                </p>
                <Button className="header-menu__button t-logout button">
                  Выйти
                </Button>
              </div>
            </div>
          ) : (
            <div className="header__content" />
          );
        }}
      </AuthConsumer>
    );
  }
}

export default Header;
