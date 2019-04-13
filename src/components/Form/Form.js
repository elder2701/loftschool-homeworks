import React from 'react';
import './Form.css';

const FIRSNAME = 'Bond';
const LASTNAME = 'James';
const PASSWORD = '007';

const AuthForm = props => {
  return (
    <form className="form">
      <h1>Введите свои данные, агент</h1>
      <p className="field">
        <label className="field__label" htmlFor="firstname">
          <span className="field-label">Имя</span>
        </label>
        <input
          className="field__input field-input t-input-firstname"
          type="text"
          name="firstname"
          value={props.firstName}
          onChange={props.handleChangeFirstName}
        />
        <span className="field__error field-error t-error-firstname">
          {props.firstNameCheck ? '' : 'Нужно указать имя'}
        </span>
      </p>
      <p className="field">
        <label className="field__label" htmlFor="lastname">
          <span className="field-label">Фамилия</span>
        </label>
        <input
          className="field__input field-input t-input-lastname"
          type="text"
          name="lastname"
          value={props.lastName}
          onChange={props.handleChangeSecondName}
        />
        <span className="field__error field-error t-error-lastname">
          {props.lastNameCheck ? '' : 'Нужно указать фамилию'}
        </span>
      </p>
      <p className="field">
        <label className="field__label" htmlFor="password">
          <span className="field-label">Пароль</span>
        </label>
        <input
          className="field__input field-input t-input-password"
          type="password"
          value={props.passWord}
          onChange={props.handleChangePassWord}
        />
        <span className="field__error field-error t-error-password">
          {props.passWordCheck ? '' : 'Нужно указать пароль'}
        </span>
      </p>
      <div className="form__buttons">
        <input
          type="submit"
          className="button t-submit"
          value="Проверить"
          onClick={props.handleSubmitClick}
        />
      </div>
    </form>
  );
};

class Form extends React.Component {
  state = {
    firstName: '',
    firstNameCheck: true,
    lastName: '',
    lastNameCheck: true,
    passWord: '',
    passWordCheck: true,
    isLoggedIn: false
  };

  handleSubmitClick = e => {
    e.preventDefault();
    if (!(this.state.firstName === FIRSNAME)) {
      this.setState({ firstNameCheck: false });
    } else {
      this.setState({ firstNameCheck: true });
    }

    if (!(this.state.lastName === LASTNAME)) {
      this.setState({ lastNameCheck: false });
    } else {
      this.setState({ lastNameCheck: true });
    }
    if (!(this.state.passWord === PASSWORD)) {
      this.setState({ passWordCheck: false });
    } else {
      this.setState({ passWordCheck: true });
    }
    let conditionLogged =
      this.state.firstNameCheck &
      this.state.lastNameCheck &
      this.state.passWordCheck;
    if (conditionLogged) {
      this.setState({ isLoggedIn: true });
    }
  };

  handleChangeFirstName = e => {
    this.setState({
      firstName: e.target.value,
      firstNameCheck: true,
      lastNameCheck: true,
      passWordCheck: true
    });
  };
  handleChangeSecondName = e => {
    this.setState({
      lastName: e.target.value,
      firstNameCheck: true,
      lastNameCheck: true,
      passWordCheck: true
    });
  };
  handleChangePassWord = e => {
    this.setState({
      passWord: e.target.value,
      firstNameCheck: true,
      lastNameCheck: true,
      passWordCheck: true
    });
  };
  render() {
    let result;
    if (!this.state.isLoggedIn) {
      result = (
        <AuthForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          passWord={this.state.passWord}
          firstNameCheck={this.state.firstNameCheck}
          lastNameCheck={this.state.lastNameCheck}
          passWordCheck={this.state.passWordCheck}
          handleSubmitClick={this.handleSubmitClick}
          handleChangeFirstName={this.handleChangeFirstName}
          handleChangeSecondName={this.handleChangeSecondName}
          handleChangePassWord={this.handleChangePassWord}
        />
      );
    } else {
      result = (
        <img
          src="/src/components/Form/assets/bond_approve.jpg"
          alt="bond aprove"
          className="t-bond-image"
        />
      );
    }
    return <div className="app-container">{result}</div>;
  }
}

export default Form;
