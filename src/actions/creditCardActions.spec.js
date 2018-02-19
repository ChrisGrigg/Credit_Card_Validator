import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './creditCardActions';

describe('Actions', () => {
  const appState = {
    cardNumber: 20,
    displayResults: false,
    cardNumberValid: {
      cardNumber: '4111111111111111',
      cardType: 'VISA',
      valid: true
    }
  };

  it('should create an action to validate a credit card number', () => {
    const fieldName = 'cardNumber';
    const value = '4111111111111111';
    const actual = ActionCreators.validateCreditCard(appState, fieldName, value);
    const expected = {
      type: ActionTypes.VALIDATE_CREDIT_CARD,
      settings: appState,
      fieldName,
      value
    };

    expect(actual).toEqual(expected);
  });
});
