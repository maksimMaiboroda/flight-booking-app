import { configureStore } from '@reduxjs/toolkit';
import flightsReducer from './flightsSlice';

const store = configureStore({
    reducer: {
        flights: flightsReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
