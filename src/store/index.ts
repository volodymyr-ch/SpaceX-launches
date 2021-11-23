import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import reducers from 'store/reducers';
import rootSaga from 'store/sagas';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
