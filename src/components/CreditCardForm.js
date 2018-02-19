import React from 'react';
import {func} from 'prop-types';
import CreditCardResults from './CreditCardResults';
import CreditCardTextInput from './CreditCardTextInput';
import {cardValidation} from '../types';

const CreditCardForm = ({cardValidation, onChange}) => (
  <div>
    <h2>Credit Card validator</h2>
    <table>
      <tbody>
        <tr>
          <td><label htmlFor="cardNumber">Credit Card No.</label></td>
          <td><CreditCardTextInput onChange={onChange} name="cardNumber" value={cardValidation.cardNumber}/>
          </td>
        </tr>
      </tbody>
    </table>

    <hr/>

    {cardValidation.requiredDataProvidedForValidation && <CreditCardResults cardNumberValid={cardValidation.cardNumberValid} />}
  </div>
);

CreditCardForm.propTypes = {
  onChange: func.isRequired,
  cardValidation: cardValidation.isRequired
};

export default CreditCardForm;
