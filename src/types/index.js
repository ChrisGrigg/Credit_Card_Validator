// Centralized propType definitions
import PropTypes from 'prop-types';

const { shape, number, bool, string } = PropTypes;

export const cardValidation = shape({
  cardNumber: PropTypes.oneOf[number,string],
  displayResult: bool,
  cardNumberValid: validation
});

export const validation = shape({
  cardNumber: PropTypes.oneOf[number,string],
  cardType: PropTypes.oneOf[number,string],
  valid: bool
});
