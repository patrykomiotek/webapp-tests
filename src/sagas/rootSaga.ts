import { fetchProducts } from '@features/products/services/products';
import { takeLatest, put, call } from 'redux-saga/effects';

type Products = NonNullable<Awaited<ReturnType<typeof fetchProducts>>>;

function* fetchProductsSaga(action) {
  try {
    const result: Products = yield call(fetchProducts); //
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
