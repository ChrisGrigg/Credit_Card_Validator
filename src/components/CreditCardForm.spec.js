import React from 'react';
import { shallow } from 'enzyme';
import CreditCardForm from './CreditCardForm';
import CreditCardTextInput from './CreditCardTextInput';
import CreditCardResults from './CreditCardResults';

function cardNumberValid(args) {
  const defaultCardValidation = {
    cardNumber: '4111111111111111',
    requiredDataProvidedForValidation: false,
    displayResults: false,
    cardNumberValid: {
      cardNumber: '',
      cardType: '',
      valid: false
    }
  };

  return {
    ...defaultCardValidation,
    ...args
  };
}

describe('<CreditCardForm />', () => {
  it('should contain <CreditCardTextInput /> components', () => {
    const cardValidation = cardNumberValid();
    const wrapper = shallow(<CreditCardForm
      cardValidation={cardValidation}
      onChange={jest.fn()}
    />);
    const allInputs = wrapper.find(CreditCardTextInput);

    expect(allInputs.length).toEqual(1);
    expect(allInputs.at(0).props().name).toEqual('cardNumber');
    expect(allInputs.at(0).props().value).toEqual(cardValidation.cardNumber);
  });

  it('should contain <CreditCardResults /> when necessary conditions are met', () => {
    const cardValidation = cardNumberValid({
      requiredDataProvidedForValidation: true,
      cardNumberValid: {
        cardNumber: '4111111111111111',
        cardType: 'VISA',
        valid: true
      }
    });

    const wrapper = shallow(<CreditCardForm
      onChange={jest.fn()}
      cardValidation={cardValidation}
    />);
    const expected = <CreditCardResults cardNumberValid={cardValidation.cardNumberValid} />;
    expect(wrapper.contains(expected)).toBeTruthy();
  });

  it('should not contain <CreditCardResults /> when necessary conditions are not met', () => {
    const cardValidation = cardNumberValid();
    const wrapper = shallow(<CreditCardForm
      onChange={jest.fn()}
      cardValidation={cardValidation}
    />);
    const expected = <CreditCardResults cardNumberValid={cardValidation.cardNumberValid} />;

    expect(wrapper.contains(expected)).toBeFalsy();
  });

  it('should call onChange when text input changes', () => {
    const onChange = jest.fn();

    const wrapper = shallow(<CreditCardForm
      onChange={onChange}
      cardValidation={cardNumberValid()}
    />);

    const changeEvent = { target: { name: 'cardNumber', value: '4111111111111111' } };

    expect(onChange).not.toBeCalled();
    wrapper.find(CreditCardTextInput).first().simulate('change', changeEvent);
    expect(onChange).toBeCalledWith(changeEvent);
  });
});
