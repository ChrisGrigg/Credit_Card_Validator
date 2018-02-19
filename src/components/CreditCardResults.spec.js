import React from 'react';
import { shallow } from 'enzyme';
import CreditCardResults from './CreditCardResults';

describe('<CreditCardResults />', () => {
  it('should display valid \'VISA\' credit card results', () => {
    const cardNumberValid = {
        cardNumber: '4111111111111111',
        cardType: 'VISA',
        valid: true
    };
    const wrapper = shallow(<CreditCardResults cardNumberValid={cardNumberValid}/>);
    const savingsLabelText = wrapper.find('.card-valid-label').text();
    expect(savingsLabelText).toEqual('VISA: 4111111111111111 (valid)');
  });

  it('should display invalid \'VISA\' credit card results', () => {
    const cardNumberValid = {
      cardNumber: '4111111111111',
      cardType: 'VISA',
      valid: false
    };
    const wrapper = shallow(<CreditCardResults cardNumberValid={cardNumberValid}/>);
    const savingsLabelText = wrapper.find('.card-valid-label').text();
    expect(savingsLabelText).toEqual('VISA: 4111111111111 (invalid)');
  });

  it('should display valid \'VISA\' credit card results', () => {
    const cardNumberValid = {
      cardNumber: '4012888888881881',
      cardType: 'VISA',
      valid: true
    };
    const wrapper = shallow(<CreditCardResults cardNumberValid={cardNumberValid}/>);
    const savingsLabelText = wrapper.find('.card-valid-label').text();
    expect(savingsLabelText).toEqual('VISA: 4012888888881881 (valid)');
  });

  it('should display valid \'AMEX\' credit card results', () => {
    const cardNumberValid = {
      cardNumber: '378282246310005',
      cardType: 'AMEX',
      valid: true
    };
    const wrapper = shallow(<CreditCardResults cardNumberValid={cardNumberValid}/>);
    const savingsLabelText = wrapper.find('.card-valid-label').text();
    expect(savingsLabelText).toEqual('AMEX: 378282246310005 (valid)');
  });

  it('should display valid \'Discover\' credit card results', () => {
    const cardNumberValid = {
      cardNumber: '6011111111111117',
      cardType: 'Discover',
      valid: true
    };
    const wrapper = shallow(<CreditCardResults cardNumberValid={cardNumberValid}/>);
    const savingsLabelText = wrapper.find('.card-valid-label').text();
    expect(savingsLabelText).toEqual('Discover: 6011111111111117 (valid)');
  });

  it('should display valid \'MasterCard\' credit card results', () => {
    const cardNumberValid = {
      cardNumber: '5105105105105100',
      cardType: 'MasterCard',
      valid: true
    };
    const wrapper = shallow(<CreditCardResults cardNumberValid={cardNumberValid}/>);
    const savingsLabelText = wrapper.find('.card-valid-label').text();
    expect(savingsLabelText).toEqual('MasterCard: 5105105105105100 (valid)');
  });

  it('should display valid \'MasterCard\' credit card results', () => {
    const cardNumberValid = {
      cardNumber: '5105105105105106',
      cardType: 'MasterCard',
      valid: true
    };
    const wrapper = shallow(<CreditCardResults cardNumberValid={cardNumberValid}/>);
    const savingsLabelText = wrapper.find('.card-valid-label').text();
    expect(savingsLabelText).toEqual('MasterCard: 5105105105105106 (valid)');
  });

  it('should display invalid \'Unknown\' credit card results', () => {
    const cardNumberValid = {
      cardNumber: '9111111111111111',
      cardType: 'Unknown',
      valid: false
    };
    const wrapper = shallow(<CreditCardResults cardNumberValid={cardNumberValid}/>);
    const savingsLabelText = wrapper.find('.card-valid-label').text();
    expect(savingsLabelText).toEqual('Unknown: 9111111111111111 (invalid)');
  });

  it('should give a \'cc-valid\' class when bool is true', () => {
    const cardNumberValid = {
      cardNumber: '4111111111111111',
      cardType: 'VISA',
      valid: true
    };
    const wrapper = shallow(<CreditCardResults cardNumberValid={cardNumberValid}/>);
    const numObjectsWithLossClass = wrapper.find('.cc-valid').length;
    expect(numObjectsWithLossClass).toEqual(1);
  });

  it('should give a \'cc-invalid\' class when bool is false', () => {
    const cardNumberValid = {
      cardNumber: '4111111111111',
      cardType: 'VISA',
      valid: false
    };
    const wrapper = shallow(<CreditCardResults cardNumberValid={cardNumberValid}/>);
    const numObjectsWithLossClass = wrapper.find('.cc-invalid').length;
    expect(numObjectsWithLossClass).toEqual(1);
  });
});
