import { configureStore } from '@reduxjs/toolkit';

import logger from 'redux-logger';

import cakeReducer from '../features/cake/cakeSlice';

import iceCreamReducer from '../features/icecream/icecreamSlice';

import userReducer from '../features/user/userSlice';

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
