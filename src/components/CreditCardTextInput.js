import React from 'react';
import PropTypes from 'prop-types';

const CreditCardTextInput = ({name, value, placeholder, onChange}) => {
  return (
    <input
      className="medium"
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}/>
  );
};

const { string, func, number, oneOfType } = PropTypes;

CreditCardTextInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  value: oneOfType([
    string,
    number
  ])
};

export default CreditCardTextInput;
