import { takeLatest, put, call } from 'redux-saga/effects';

import { ProductDto } from '@apptypes/ProductDto';
import { fetchProducts } from '@features/products/services/products';

// type Products = NonNullable<Awaited<ReturnType<typeof fetchProducts>>>;

function* customCall(...args) {
  return yield call(...args);
}

function* fetchProductsSaga(action) {
  try {
    // 1. basic redux-saga
    // const result = yield call(fetchProducts);

    // 2. working
    const result: ProductDto[] = yield call(fetchProducts);
    console.log('inside saga: ', result);

    // 3. typed-redux-saga disables types error, but result is any
    // const result = yield* customCall(fetchProducts); //

    yield put({ type: 'PRODUCTS_FETCH_SUCCEEDED', result });
  } catch (error) {
    yield put({ type: 'PRODUCTS_FETCH_FAILED' });
  }
}

export function* rootSaga() {
  // call for products
  // -> dispatch product reducer
  yield takeLatest('PRODUCTS_FETCH_REQUESTED', fetchProductsSaga);
}
