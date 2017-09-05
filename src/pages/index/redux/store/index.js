'use strict';

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];
// 避免引入到生产环境
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const createStoreWithMiddleware = compose(applyMiddleware(...middlewares))(createStore);
export default createStoreWithMiddleware;
