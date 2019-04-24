import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  logout = evt => {
    this.setState({ email: '', isAuthorized: false });
  };
  getProviderValue = () => {};
  authorize = (email, password) => {
    const emailValid = 'test@test.ru';
    const passValid = '123';
    let isAuth = false;
    let errorAuth = '';
    if ((email === emailValid) & (password === passValid)) {
      isAuth = true;
    } else {
      errorAuth = 'Email или пароль введён не верно';
    }
    this.setState({
      email: email,
      isAuthorized: isAuth,
      authorizeError: errorAuth
    });
  };

  state = {
    email: '',
    isAuthorized: false,
    authorize: this.authorize,
    authorizeError: '',
    logout: this.logout
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
