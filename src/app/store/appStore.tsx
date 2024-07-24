import { configureStore } from '@reduxjs/toolkit';
import { apiProduct, sortedProductsApi } from './api/apiProduct';

export const store = configureStore({
  reducer: {
    [apiProduct.reducerPath]: apiProduct.reducer,
    [sortedProductsApi.reducerPath] : sortedProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiProduct.middleware, sortedProductsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
