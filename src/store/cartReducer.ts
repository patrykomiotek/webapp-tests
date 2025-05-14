import {
  ADD_ITEM_TO_CART,
  CartActionType,
  CartState,
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_QUANTITY,
} from './cartTypes';

const initialState: CartState = {
  items: [],
};

export const cartReducer = (state: CartState = initialState, action: CartActionType) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const element = state.items.find((elem) => elem.id === action.payload.id);
      if (!element) {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      } else {
        return {
          ...state,
          items: state.items.map((item) => {
            if (item.id === action.payload.id) {
              // update quantity
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            } else {
              return item;
            }
          }),
        };
      }
    }

    case REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        items: state.items.filter((elem) => elem.id !== action.payload.id),
      };
    }

    case UPDATE_ITEM_QUANTITY: {
      return {
        ...state,
        items: state.items.map((elem) => {
          if (elem.id === action.payload.item.id) {
            return {
              ...elem,
              quantity: action.payload.quantity,
            };
          } else {
            return elem;
          }
        }),
      };
    }

    default:
      return state;
  }
};
