import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import gameService from './gameService'

const initialState = {
    games: [],
    searchName: "",
    searchPlayers: 0,
    searchTime: 0,
    searchPublisher: "",
    searchDesigner: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        reset: (state) => initialState,
    }
})