// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
import React, { Component } from 'react';

class Mail extends Component {
  render() {
    return (
      <div className="container">
        <p className="t-mail-to">
          To: <b />
        </p>
        <p className="t-mail-body" />
      </div>
    );
  }
}

// ДОДЕЛАТЬ! Не хватает зачение для тегов "p"

export default Mail;
