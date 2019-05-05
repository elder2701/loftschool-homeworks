// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React, { Component } from 'react';

class Home extends Component {
  render() {
    console.log('home');
    return (
      <div className="container">
        <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
      </div>
    );
  }
}

export default Home;
