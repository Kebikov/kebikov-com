import { configureStore } from "@reduxjs/toolkit";
import indexSlice from '@/redux/slice/indexSlice';



const store = configureStore({
    reducer: {indexSlice},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;

