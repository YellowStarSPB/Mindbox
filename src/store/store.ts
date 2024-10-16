import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../entities/todo/model/todoSlice';


export const store = configureStore({
    reducer: {
        todo: todoSlice,
    },
    devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
