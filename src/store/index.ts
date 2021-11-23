import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from 'store/reducers';
import rootSaga from 'store/sagas';

const isProd = process.env.NODE_ENV === 'production';
const composeEnhancers = isProd
  ? compose
  : composeWithDevTools({ trace: true, traceLimit: 25 });

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
