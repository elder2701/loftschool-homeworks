import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, authorize, authorizeError }) => {
          return isAuthorized ? (
            <div className="header__content">
              <div className="header-menu">
                <p className="header-menu__email header-email t-header-email">
                  {authorize}
                </p>
                <Button />
              </div>
            </div>
          ) : null;
        }}
      </AuthConsumer>
    );
  }
}

export default Header;
