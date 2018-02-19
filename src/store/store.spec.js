import * as ActionTypes from '../constants/actionTypes';

import configureStore from './configureStore';

import {validateCardNumber} from '../utils/cardValidation';

describe('Store', () => {
  it('should display results when necessary data is provided', () => {
    const store = configureStore();

    const actions = [
      { type: ActionTypes.VALIDATE_CREDIT_CARD, settings: store.getState(), fieldName: 'cardNumber', value: '4111111111111111' },
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      cardNumber: '4111111111111111',
      requiredDataProvidedForValidation: true,
      displayResults: false,
      cardNumberValid: validateCardNumber(store.getState().cardValidation)
    };

    expect(actual.cardValidation).toEqual(expected);
  });

  it('should not display results when necessary data is not provided', () => {
    const store = configureStore();

    const actions = [
      // { type: ActionTypes.VALIDATE_CREDIT_CARD, settings: store.getState(), fieldName: 'cardNumber', value: '4111111111111111' },
    ];

    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();

    const expected = {
      cardNumber: '',
      displayResults: false,
      requiredDataProvidedForValidation: false,
      cardNumberValid: {
        cardNumber: '',
        cardType: '',
        valid: false
      }
    };

    expect(actual.cardValidation).toEqual(expected);
  });


  it('should handle a flurry of actions', () => {
    const store = configureStore();

    const actions = [
      { type: ActionTypes.VALIDATE_CREDIT_CARD, settings: store.getState(), fieldName: 'cardNumber', value: '4111111111111111' },
      { type: ActionTypes.VALIDATE_CREDIT_CARD, settings: store.getState(), fieldName: 'cardNumber', value: '4111111111111' },
      { type: ActionTypes.VALIDATE_CREDIT_CARD, settings: store.getState(), fieldName: 'cardNumber', value: '4012888888881881' },
      { type: ActionTypes.VALIDATE_CREDIT_CARD, settings: store.getState(), fieldName: 'cardNumber', value: '378282246310005' },
    ];
    actions.forEach(action => store.dispatch(action));

    validateCardNumber(store.getState().cardValidation);

    const moreActions = [
      { type: ActionTypes.VALIDATE_CREDIT_CARD, settings: store.getState(), fieldName: 'cardNumber', value: '6011111111111117' },
      { type: ActionTypes.VALIDATE_CREDIT_CARD, settings: store.getState(), fieldName: 'cardNumber', value: '5105105105105100' },
      { type: ActionTypes.VALIDATE_CREDIT_CARD, settings: store.getState(), fieldName: 'cardNumber', value: '5105105105105106' },
      { type: ActionTypes.VALIDATE_CREDIT_CARD, settings: store.getState(), fieldName: 'cardNumber', value: '9111111111111111' },
    ];

    moreActions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    expect(actual.cardValidation).toMatchSnapshot();
  });
});
