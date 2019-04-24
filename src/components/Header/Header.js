import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        {this.props.children}
        <AuthConsumer>
          {({ isAuthorized, logout }) => {
            return isAuthorized ? (
              <div className="header__content">
                <div className="header-menu">
                  <p className="header-menu__email header-email t-header-email">
                    test@test.ru
                  </p>
                  <Button
                    onClick={logout}
                    className="header-menu__button t-logout button"
                  >
                    Выйти
                  </Button>
                </div>
              </div>
            ) : null;
          }}
        </AuthConsumer>
      </header>
    );
  }
}

export default Header;
