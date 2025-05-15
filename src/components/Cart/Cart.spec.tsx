import { fireEvent, render, screen } from '@testing-library/react';

import { Cart } from './Cart';
import { combineReducers, createStore, Reducer, UnknownAction } from 'redux';
import { cartReducer } from 'store/cartReducer';
import { CartState } from 'store/cartTypes';
import { Provider } from 'react-redux';
import { counterReducer, RootState } from 'store';

const testReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer as Reducer<CartState, UnknownAction>,
});

// type InitialState = ReturnType<typeof testReducer>;
// type InitialState: RootState;

const initialState: RootState = {
  counter: {
    count: 0,
  },
  wizard: {
    currentStep: 1,
    incomeDetails: {
      annualIncome: 0,
      employmentStatus: '',
    },
    isSubmitted: false,
    personalInfo: {
      firstName: '',
      lastName: '',
      age: 0,
    },
  },
  cart: {
    items: [
      { id: 1, name: 'prod1', price: 123, quantity: 1 },
      { id: 1, name: 'prod2', price: 435, quantity: 1 },
      { id: 1, name: 'prod3', price: 234, quantity: 1 },
    ],
  },
};

const createTestStore = () => createStore(testReducer, initialState);

describe('Cart component', () => {
  it('should display info about an empty cart', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Cart />
      </Provider>,
    );

    expect(screen.queryByText('Your cart is empty')).toBeNull();

    const buttons = screen.getAllByRole('button');
    const secondButton = buttons[1];

    fireEvent.click(secondButton);
    fireEvent.click(secondButton);

    // expect(screen.getByText('Remove')).toBeInTheDocument();

    // expect(screen.getByText('Remove')).toBeInTheDocument();
  });
});
