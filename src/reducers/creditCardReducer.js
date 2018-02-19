import {VALIDATE_CREDIT_CARD} from '../constants/actionTypes';
import {requiredDataProvidedForValidation, validateCardNumber} from '../utils/cardValidation';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function creditCardReducer(state = initialState.cardValidation, action) {
  let newState;

  switch (action.type) {
    case VALIDATE_CREDIT_CARD:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      newState.requiredDataProvidedForValidation = requiredDataProvidedForValidation(newState);

      if (newState.requiredDataProvidedForValidation) {
        newState.cardNumberValid = validateCardNumber(newState);
      }

      return newState;

    default:
      return state;
  }
}
