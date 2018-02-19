import * as types from '../constants/actionTypes';

export function validateCreditCard(settings, fieldName, value) {
  return {
    type: types.VALIDATE_CREDIT_CARD,
    settings,
    fieldName,
    value
  };
}
