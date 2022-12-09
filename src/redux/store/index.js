import reducer from '../slice/indexSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;