import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/creditCardActions';
import CreditCardForm from '../CreditCardForm';

export class CreditCardPage extends React.Component {
  validateCreditCard = e => {
    this.props.actions.validateCreditCard(this.props.cardValidation, e.target.name, e.target.value);
  };

  render() {
    return (
      <CreditCardForm
        onChange={this.validateCreditCard}
        cardValidation={this.props.cardValidation}
      />
    );
  }
}

CreditCardPage.propTypes = {
  actions: PropTypes.object.isRequired,
  cardValidation: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    cardValidation: state.cardValidation
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditCardPage);
