import {requiredDataProvidedForValidation, validateCardNumber, executeLuhnAlgorithm, getCardType} from './cardValidation';

describe('Credit Card Validator', () => {
  describe('requiredDataProvidedForValidation', () => {
    it('returns false when necessary data isn\'t provided', () => {
      const settings = {
        cardNumber: 0
      };
      expect(requiredDataProvidedForValidation(settings)).toEqual(false);
    });

    it('passes validation when settings have valid cardNumber prop', () => {
      const settings = {
        cardNumber: '4111111111111111'
      };
      expect(requiredDataProvidedForValidation(settings)).toEqual(true);
    });
  });

  describe('getCardType', () => {
    it('returns VISA with card number as \'4111111111111111\'', () => {
      const settings = {
        cardNumber: '4111111111111111',
      };
      const cardValidation = getCardType(settings);
      expect(cardValidation).toEqual('VISA');
    });

    it('returns VISA with card number as \'4111111111111\'', () => {
      const settings = {
        cardNumber: '4111111111111',
      };
      const cardValidation = getCardType(settings);
      expect(cardValidation).toEqual('VISA');
    });

    it('returns VISA with card number as \'4012888888881881\'', () => {
      const settings = {
        cardNumber: '4012888888881881',
      };
      const cardValidation = getCardType(settings);
      expect(cardValidation).toEqual('VISA');
    });

    it('returns AMEX with card number as \'378282246310005\'', () => {
      const settings = {
        cardNumber: '378282246310005',
      };
      const cardValidation = getCardType(settings);
      expect(cardValidation).toEqual('AMEX');
    });

    it('returns Discover with card number as \'6011111111111117\'', () => {
      const settings = {
        cardNumber: '6011111111111117',
      };
      const cardValidation = getCardType(settings);
      expect(cardValidation).toEqual('Discover');
    });

    it('returns MasterCard with card number as \'5105105105105100\'', () => {
      const settings = {
        cardNumber: '5105105105105100',
      };
      const cardValidation = getCardType(settings);
      expect(cardValidation).toEqual('MasterCard');
    });

    it('returns MasterCard with card number as \'5105105105105106\'', () => {
      const settings = {
        cardNumber: '5105105105105106',
      };
      const cardValidation = getCardType(settings);
      expect(cardValidation).toEqual('MasterCard');
    });

    it('returns Unknown with card number as \'9111111111111111\'', () => {
      const settings = {
        cardNumber: '9111111111111111',
      };
      const cardValidation = getCardType(settings);
      expect(cardValidation).toEqual('Unknown');
    });
  });

  describe('executeLuhnAlgorithm', () => {
    it('returns true with card number as \'4111111111111111\'', () => {
      const settings = {
        cardNumber: '4111111111111111',
      };
      const cardValidation = executeLuhnAlgorithm(settings);
      expect(cardValidation).toEqual(true);
    });

    it('returns false with card number as \'4111111111111\'', () => {
      const settings = {
        cardNumber: '4111111111111',
      };
      const cardValidation = executeLuhnAlgorithm(settings);
      expect(cardValidation).toEqual(false);
    });

    it('returns true with card number as \'4012888888881881\'', () => {
      const settings = {
        cardNumber: '4012888888881881',
      };
      const cardValidation = executeLuhnAlgorithm(settings);
      expect(cardValidation).toEqual(true);
    });

    it('returns true with card number as \'378282246310005\'', () => {
      const settings = {
        cardNumber: '378282246310005',
      };
      const cardValidation = executeLuhnAlgorithm(settings);
      expect(cardValidation).toEqual(true);
    });

    it('returns true with card number as \'6011111111111117\'', () => {
      const settings = {
        cardNumber: '6011111111111117',
      };
      const cardValidation = executeLuhnAlgorithm(settings);
      expect(cardValidation).toEqual(true);
    });

    it('returns true with card number as \'5105105105105100\'', () => {
      const settings = {
        cardNumber: '5105105105105100',
      };
      const cardValidation = executeLuhnAlgorithm(settings);
      expect(cardValidation).toEqual(true);
    });

    it('returns false with card number as \'5105105105105106\'', () => {
      const settings = {
        cardNumber: '5105105105105106',
      };
      const cardValidation = executeLuhnAlgorithm(settings);
      expect(cardValidation).toEqual(false);
    });

    it('returns false with card number as \'9111111111111111\'', () => {
      const settings = {
        cardNumber: '9111111111111111',
      };
      const cardValidation = executeLuhnAlgorithm(settings);
      expect(cardValidation).toEqual(false);
    });
  });

  describe('validateCardNumber', () => {
    it('return valid \'VISA\' object with card number as \'4111111111111111\'', () => {
      const settings = {
        cardNumber: '4111111111111111',
      };
      const cardValidation = validateCardNumber(settings);
      expect(cardValidation).toEqual({
        cardNumber: '4111111111111111',
        cardType: 'VISA',
        valid: true
      });
    });

    it('returns invalid \'VISA\' object with card number as \'4111111111111\'', () => {
      const settings = {
        cardNumber: '4111111111111',
      };
      const cardValidation = validateCardNumber(settings);
      expect(cardValidation).toEqual({
        cardNumber: '4111111111111',
        cardType: 'VISA',
        valid: false
      });
    });

    it('returns valid \'VISA\' object with card number as \'4012888888881881\'', () => {
      const settings = {
        cardNumber: '4012888888881881',
      };
      const cardValidation = validateCardNumber(settings);
      expect(cardValidation).toEqual({
        cardNumber: '4012888888881881',
        cardType: 'VISA',
        valid: true
      });
    });

    it('returns valid \'AMEX\' object with card number as \'378282246310005\'', () => {
      const settings = {
        cardNumber: '378282246310005',
      };
      const cardValidation = validateCardNumber(settings);
      expect(cardValidation).toEqual({
        cardNumber: '378282246310005',
        cardType: 'AMEX',
        valid: true
      });
    });

    it('returns valid \'Discover\' object with card number as \'6011111111111117\'', () => {
      const settings = {
        cardNumber: '6011111111111117',
      };
      const cardValidation = validateCardNumber(settings);
      expect(cardValidation).toEqual({
        cardNumber: '6011111111111117',
        cardType: 'Discover',
        valid: true
      });
    });

    it('returns valid \'MasterCard\' object with card number as \'5105105105105100\'', () => {
      const settings = {
        cardNumber: '5105105105105100',
      };
      const cardValidation = validateCardNumber(settings);
      expect(cardValidation).toEqual({
        cardNumber: '5105105105105100',
        cardType: 'MasterCard',
        valid: true
      });
    });

    it('returns invalid \'MasterCard\' object with card number as \'5105105105105106\'', () => {
      const settings = {
        cardNumber: '5105105105105106',
      };
      const cardValidation = validateCardNumber(settings);
      expect(cardValidation).toEqual({
        cardNumber: '5105105105105106',
        cardType: 'MasterCard',
        valid: false
      });
    });

    it('returns invalid \'Unknown\' object with card number as \'9111111111111111\'', () => {
      const settings = {
        cardNumber: '9111111111111111',
      };
      const cardValidation = validateCardNumber(settings);
      expect(cardValidation).toEqual({
        cardNumber: '9111111111111111',
        cardType: 'Unknown',
        valid: false
      });
    });
  });

});
