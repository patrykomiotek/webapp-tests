export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  error?: object;
}

export const ADD_ITEM_TO_CART = 'cart/ADD_ITEM_TO_CART';
export const REMOVE_ITEM_FROM_CART = 'cart/REMOVE_ITEM_FROM_CART';
export const UPDATE_ITEM_QUANTITY = 'cart/UPDATE_ITEM_QUANTITY';

export const addItemToCart = (item: CartItem) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (item: CartItem) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const updateItemQuantity = (item: CartItem, quantity: number) => ({
  type: UPDATE_ITEM_QUANTITY,
  payload: {
    item,
    quantity,
  },
});

export type CartActionType =
  | {
      type: 'cart/ADD_ITEM_TO_CART';
      payload: CartItem;
    }
  | {
      type: 'cart/REMOVE_ITEM_FROM_CART';
      payload: CartItem;
    }
  | {
      type: 'cart/UPDATE_ITEM_QUANTITY';
      payload: {
        item: CartItem;
        quantity: number;
      };
    };
