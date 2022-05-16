import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import todoReducer from 'store/collectionSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        todos: todoReducer,
    }
});