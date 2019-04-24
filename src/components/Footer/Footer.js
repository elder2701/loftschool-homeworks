import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        {this.props.children}
        <AuthConsumer>
          {({ isAuthorized }) => {
            return isAuthorized ? (
              <p className="footer-message t-footer">
                Вы вошли как test@test.ru
              </p>
            ) : (
              <p className="footer-message t-footer">Вы гость в этой системе</p>
            );
          }}
        </AuthConsumer>
      </footer>
    );
  }
}

export default Footer;
