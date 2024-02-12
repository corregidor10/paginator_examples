import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import commonReducer from './reducers/common';

export const store = configureStore({
    reducer: {
        common: commonReducer,
    },
    devTools: ['dev'].includes(import.meta.env.VITE_ENV),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
