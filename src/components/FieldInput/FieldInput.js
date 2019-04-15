import React from 'react';
import './FieldInput.css';

const FieldInput = props => {
  return (
    <p className="field">
      <label className="field__label" htmlFor={props.inputName}>
        <span className="field-label">{props.valueLabel}</span>
      </label>
      <input
        className={`field__input field-input t-input-${props.inputName}`}
        type="text"
        name={props.inputName}
        value={props.valueInput}
        onChange={props.handleChange}
      />
      <span className={`field__error field-error t-error-${props.inputName}`}>
        {props.errorCheck ? '' : `Нужно указать ${props.valueError}`}
      </span>
    </p>
  );
};

export default FieldInput;
