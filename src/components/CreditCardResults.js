import React from 'react';
import PropTypes from 'prop-types';

const CreditCardResults = ({cardNumberValid}) => {
  const validMessage = (cardNumberValid.valid) ? 'valid' : 'invalid';
  const message = `${cardNumberValid.cardType}: ${cardNumberValid.cardNumber} (${validMessage})`;
  const validClass = cardNumberValid.valid ? 'card-valid-label cc-valid' : 'card-valid-label cc-invalid';

  return (
      <p className={validClass}>{message}</p>
  );
};

CreditCardResults.propTypes = {
  cardNumberValid: PropTypes.object.isRequired
};

export default CreditCardResults;
