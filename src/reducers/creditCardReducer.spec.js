import * as ActionTypes from '../constants/actionTypes';
import reducer from './creditCardReducer';

describe('Reducers::CardValidation', () => {
  const getInitialState = () => {
    return {
      cardNumber: '',
      displayResults: false,
      requiredDataProvidedForValidation: false,
      cardNumberValid: {
        cardNumber: '',
        cardType: '',
        valid: false
      }
    };
  };

  const getAppState = () => {
    return {
      cardNumber: '4111111111111111',
      displayResults: true,
      requiredDataProvidedForValidation: true,
      cardNumberValid: {
        cardNumber: '4111111111111111',
        cardType: 'VISA',
        valid: true
      }
    };
  };

  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();
    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle VALIDATE_CREDIT_CARD', () => {
    const action = { type: ActionTypes.VALIDATE_CREDIT_CARD, settings: getAppState(), fieldName: 'cardNumber', value: '4111111111111111' };
    expect(reducer(getAppState(), action).cardNumberValid).toBeTruthy();
  });
});
