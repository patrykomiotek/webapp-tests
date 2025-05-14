// type ProductAction = {
//   action: 'CREATE_PRODUCT_REQUESTED';
//   payload: object;
// };

// function* customCall(...args) {
//   return yield call(...args);
// }

// function* fetchProductsSaga(action) {
// 1. basic redux-saga
// const result = yield call(fetchProducts);
// 2. working
// const result: ProductDto[] = yield call(fetchProducts);
// 3. typed-redux-saga disables types error, but result is any
// const result = yield* customCall(fetchProducts); //
// }

// function* createProductSaga(action: ProductAction) {}

export function* rootSaga() {}
