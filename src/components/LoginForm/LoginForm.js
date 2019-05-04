// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';

class LoginForm extends Component {
  state = {
    login: '',
    password: ''
  };

  handleChange = e => {
    const classNameInput = e.target.className.split(' ')[1];
    if (classNameInput === 't-input-email') {
      this.setState({ login: e.target.value });
    } else if (classNameInput === 't-input-password') {
      this.setState({ password: e.target.value });
    }
  };

  handleClick = () => {
    let { authorize } = this.props;
    let { login, password } = this.state;
    authorize(login, password);
  };
  render() {
    const { login, password } = this.state;
    const { authError } = this.props;

    return (
      <div className="bg">
        <div className="form t-form">
          <p>
            <label htmlFor="email">
              <span className="labelText">Почта</span>
              <input
                type="text"
                name="email"
                className="input t-input-email"
                value={login}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label htmlFor="password">
              <span className="labelText">Пароль</span>
              <input
                type="password"
                name="password"
                className="input t-input-password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
          </p>
          {authError ? <p>{authError}</p> : null}
          <div className="buttons">
            <button onClick={this.handleClick} className="button t-login">
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);
