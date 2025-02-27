import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from '../services/usersApi';

const store = configureStore({
  reducer: {
    // Add the API reducer to the store
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware), // Add the middleware
});

export default store;
