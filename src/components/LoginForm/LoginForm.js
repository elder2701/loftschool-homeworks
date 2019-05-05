// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css';

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
    const { authError, isAuthorized } = this.props;
    return isAuthorized ? (
      <Redirect to="/app" />
    ) : (
      <div className={styles.bg}>
        <div className={styles.form + ' t-form'}>
          <p>
            <label htmlFor="email">
              <span className={styles.labelText}>Почта</span>
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
              <span className={styles.labelText}>Пароль</span>
              <input
                type="password"
                name="password"
                className="input t-input-password"
                value={password}
                onChange={this.handleChange}
              />
            </label>
          </p>
          {authError ? <p className={styles.error}>{authError}</p> : null}
          <div className={styles.buttons}>
            <button
              onClick={this.handleClick}
              className={styles.button + ' t-login'}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);
