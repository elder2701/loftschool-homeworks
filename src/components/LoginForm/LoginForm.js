// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    login: '',
    password: '',
    isError: false
  };

  handleChange = e => {
    console.log(e);
  };

  render() {
    const { login, password, isError } = this.state;
    return (
      <div className="bg">
        <div className="form t-form">
          <p>
            <lable for="email">
              <span className="labelText">Почта</span>
              <input
                type="text"
                name="email"
                class="input t-input-email"
                value={login}
                onChange={this.handleChange}
              />
            </lable>
          </p>
          <p>
            <lable for="password">
              <span className="labelText">Почта</span>
              <input
                type="password"
                name="password"
                class="input t-input-password"
                value={password}
                onChange={this.onChange}
              />
            </lable>
          </p>
          {isError ? <p className="error">Почта или пороль неверны</p> : null}
          <div className="buttons">
            <button className="button t-login">Войти</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
