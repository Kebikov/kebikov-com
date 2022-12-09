import reducer from '../reducers/reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;