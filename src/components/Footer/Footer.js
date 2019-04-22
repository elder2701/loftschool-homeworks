import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, authorize, authorizeError }) => {
          return isAuthorized ? (
            <p class="footer-message t-footer">Вы вошли как {authorize}</p>
          ) : null;
        }}
      </AuthConsumer>
    );
  }
}

export default Footer;
