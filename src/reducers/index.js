import { combineReducers } from 'redux';
import cardValidation from './creditCardReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  cardValidation,
  routing: routerReducer
});

export default rootReducer;
