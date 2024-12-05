import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

type Action = {
  type: 'increment' | 'decrement';
  // payload?: any;
};

type State = {
  count: number;
};

const INITIAL_STATE = {
  count: 0,
};

const testReducer = (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      }; //
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }; //
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  test: testReducer,
});

const initialState = {};

// const sagaMiddleware = createSagaMiddleware()
// import { helloSaga } from './sagas';

// const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
// sagaMiddleware.run(mySaga)

// const action = type => store.dispatch({type})
