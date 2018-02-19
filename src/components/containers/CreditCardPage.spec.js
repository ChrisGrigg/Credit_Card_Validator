import React from "react";
import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import ConnectedCreditCardPage, { CreditCardPage } from "./CreditCardPage";
import CreditCardForm from "../CreditCardForm";
import initialState from "../../reducers/initialState";

describe("<CreditCardPage />", () => {
  const actions = {
    validateCreditCard: jest.fn()
  };

  it("should contain <CreditCardForm />", () => {
    const wrapper = shallow(
      <CreditCardPage
        actions={actions}
        cardValidation={initialState.cardValidation}
      />
    );

    expect(wrapper.find(CreditCardForm).length).toEqual(1);
  });

  it("calls validateCreditCard upon changing a field", () => {
    const wrapper = mount(
      <CreditCardPage
        actions={actions}
        cardValidation={initialState.cardValidation}
      />
    );
    const name = "cardNumber";
    const value = '4111111111111111';

    const input = wrapper.find('input[name="cardNumber"]');
    input.simulate("change", { target: { name, value } });

    expect(actions.validateCreditCard).toHaveBeenCalledWith(
      initialState.cardValidation,
      name,
      value
    );
  });

  it("should match snapshot", () => {
    const store = configureMockStore()(initialState);
    const component = create(
      <Provider store={store}>
        <ConnectedCreditCardPage />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
