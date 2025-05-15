import { combineReducers, createStore, compose, applyMiddleware, Reducer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '@sagas/rootSaga';
import { cartReducer } from 'store/cartReducer';
import { CartActionType, CartState } from 'store/cartTypes';
import { formWizardReducer } from 'store/formWizardReducer';
import { FormWizardActionType, FormWizardState } from 'store/formWizardTypes';

interface Action {
  type: string;
}

interface State {
  count: number;
}

const INITIAL_STATE = {
  count: 0,
};

export const counterReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

// TODO: implement
// const productsReducer = (state: State = PRODUCTS_INITIAL_STATE, action: ProductAction) => {
//   switch (action.type) {
//     case 'PRODUCTS_FETCH_REQUESTED':
//       return {
//         ...state,
//       }; //
//     case 'PRODUCTS_FETCH_SUCCEEDED':
//       return {
//         ...state,
//       }; //
//     case 'PRODUCTS_FETCH_FAILED':
//       return {
//         ...state,
//       };
//     case 'CREATE_PRODUCT_REQUESTED':
//       return {
//         ...state,
//       };

//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  counter: counterReducer,
  // TODO: implement
  // products: productsReducer,
  cart: cartReducer as Reducer<CartState, CartActionType>,
  wizard: formWizardReducer as Reducer<FormWizardState, FormWizardActionType>,
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [sagaMiddleware];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

// const action = type => store.dispatch({type})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
