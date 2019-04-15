import React from 'react';
import './Form.css';
import FieldInput from '../FieldInput';

const FIRSNAME = 'James';
const LASTNAME = 'Bond';
const PASSWORD = '007';

const AuthForm = props => {
  return (
    <form className="form">
      <h1>Введите свои данные, агент</h1>
      <FieldInput
        inputName="firstname"
        valueLabel="Имя"
        valueInput={props.firstName}
        handleChange={props.handleChange}
        errorCheck={props.firstNameCheck}
        valueError="имя"
      />
      <FieldInput
        inputName="lastname"
        valueLabel="Фамилия"
        valueInput={props.lastName}
        handleChange={props.handleChange}
        errorCheck={props.lastNameCheck}
        valueError="фамилию"
      />
      <FieldInput
        inputName="password"
        valueLabel="Пароль"
        valueInput={props.passWord}
        handleChange={props.handleChange}
        errorCheck={props.passWordCheck}
        valueError="пароль"
      />
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
    let firstName = true;
    let lastName = true;
    let passWord = true;
    let isLoggedIn = false;
    if (!(this.state.firstName === FIRSNAME)) {
      firstName = false;
    }
    if (!(this.state.lastName === LASTNAME)) {
      lastName = false;
    }
    if (!(this.state.passWord === PASSWORD)) {
      passWord = false;
    }
    let authCondition = firstName & lastName & passWord;
    if (authCondition) {
      isLoggedIn = true;
    }
    this.setState({
      firstNameCheck: firstName,
      lastNameCheck: lastName,
      passWordCheck: passWord,
      isLoggedIn: isLoggedIn
    });
  };
  handleChange = e => {
    switch (e.target.name) {
      case 'firstname':
        this.setState({
          firstName: e.target.value,
          firstNameCheck: true,
          lastNameCheck: true,
          passWordCheck: true
        });
        break;
      case 'lastname':
        this.setState({
          lastName: e.target.value,
          firstNameCheck: true,
          lastNameCheck: true,
          passWordCheck: true
        });
        break;
      case 'password':
        this.setState({
          passWord: e.target.value,
          firstNameCheck: true,
          lastNameCheck: true,
          passWordCheck: true
        });
        break;
      default:
    }
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
          handleChange={this.handleChange}
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
