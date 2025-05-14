import { cartReducer } from './cartReducer';
import {
  ADD_ITEM_TO_CART,
  CartActionType,
  CartItem,
  CartState,
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_QUANTITY,
} from './cartTypes';

describe('cartReducer', () => {
  // Stan początkowy.
  // Dodawanie nowego produktu.
  // Dodawanie istniejącego produktu (powinno zaktualizować ilość).
  // Usuwanie produktu.
  // Aktualizowanie ilości produktu.
  // Aktualizowanie ilości do 0 (powinno usunąć produkt).
  // Próbę aktualizacji/usunięcia nieistniejącego produktu.
  it('should return default state', () => {
    const initialState: CartState = { items: [] };

    const state = cartReducer(initialState, {} as CartActionType); // CartActionType

    expect(state.items.length).toEqual(0);
  });
  it('should add new product', () => {
    const item1: CartItem = { id: 1, name: 'Prod1', price: 123, quantity: 1 };
    const initialState: CartState = { items: [] };
    const action: CartActionType = { type: ADD_ITEM_TO_CART, payload: item1 };

    const state = cartReducer(initialState, action); // CartActionType
    expect(state.items[0]).toStrictEqual(item1);
  });
  it('should add existing product', () => {
    const item1: CartItem = { id: 1, name: 'Prod1', price: 123, quantity: 1 };
    const initialState: CartState = { items: [] };
    const action: CartActionType = { type: ADD_ITEM_TO_CART, payload: item1 };

    let state = cartReducer(initialState, action);
    state = cartReducer(state, action);

    expect(state.items[0].quantity).toStrictEqual(2);
  });
  it('should remove product', () => {
    const item1: CartItem = { id: 1, name: 'Prod1', price: 123, quantity: 1 };
    const item2: CartItem = { id: 2, name: 'Prod2', price: 321, quantity: 1 };
    const initialState: CartState = { items: [] };
    const action1: CartActionType = { type: ADD_ITEM_TO_CART, payload: item1 };
    const action2: CartActionType = { type: ADD_ITEM_TO_CART, payload: item2 };

    let state = cartReducer(initialState, action1);
    state = cartReducer(state, action2);

    expect(state.items.length).toEqual(2);

    state = cartReducer(state, { type: REMOVE_ITEM_FROM_CART, payload: item1 });
    expect(state.items.length).toEqual(1);
  });
  it('should update product quantity', () => {
    const item1: CartItem = { id: 1, name: 'Prod1', price: 123, quantity: 5 };
    const initialState: CartState = { items: [item1] };
    const action: CartActionType = {
      type: UPDATE_ITEM_QUANTITY,
      payload: {
        item: item1,
        quantity: 9,
      },
    };

    const state = cartReducer(initialState, action);

    expect(state.items[0].quantity).toStrictEqual(9);
  });
  it.todo('should reset product quantity');
  it.todo('should handle update and remove non existing product');
});
