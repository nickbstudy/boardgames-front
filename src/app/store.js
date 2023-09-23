import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '../features/games/gameSlice'
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        games: gameReducer
    }
})