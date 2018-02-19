export function getCardType(settings) {
  if (!settings.cardNumber) {
    throw new Error('Card number property does not exist');
  }

  let number = settings.cardNumber;
  number = ('' + number).replace(/\D/g, '');

  // TODO: with more time I would implement these checks as strategies,
  // TODO: compose them into this web component and call a validate() method on each
  // TODO: this would make it easily extensible and make it straightforward to create mocks and inject rules in acceptance tests etc
  if (/^5[1-5]/.test(number) && number.length === 16) {
    return 'MasterCard';
  } else if (/^(6011|622|64|65)/.test(number) && number.length === 16) {
    return 'Discover';
  } else if (/^3[47]/.test(number) && number.length === 15) {
    return 'AMEX';
  } else if (/^(4)/.test(number) && (number.length === 13 || number.length === 16)) {
    return 'VISA';
  }

  return 'Unknown';
}

export function executeLuhnAlgorithm(settings) {
  if (!settings.cardNumber) {
    throw new Error('Card number property does not exist');
  }

  // https://gist.github.com/DiegoSalazar/4075533
  if (/[^0-9-\s]+/.test(settings.cardNumber)) return false;

  let nCheck = 0;
  let nDigit = 0;
  let bEven = false;
  for (let n = settings.cardNumber.length - 1; n >= 0; n--) {
    let cDigit = settings.cardNumber.charAt(n);
    nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) === 0;
}

export function requiredDataProvidedForValidation(settings) {
  return settings.cardNumber > 0;
}

export function validateCardNumber(settings) {
  const cardType = getCardType(settings);
  const validCardType = cardType !== 'Unknown' && executeLuhnAlgorithm(settings);
  return {
    cardNumber: settings.cardNumber,
    cardType: cardType,
    valid: validCardType
  }
}
