import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import gameService from './gameService'

const initialState = {
    games: [],
    searchName: "",
    playerCount: 0,
    minTime: 0,
    maxTime: 0,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


// Get user games
export const getGames = createAsyncThunk('games/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await gameService.getGames(token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Add new game
export const addGame = createAsyncThunk('games/addNew', async (gameData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await gameService.addGame(gameData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Change a game
export const changeGame = createAsyncThunk('games/change', async (gameData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await gameService.changeGame(gameData, token);   
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Delete a game
export const deleteGame = createAsyncThunk('games/delete', async (gameData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
        return await gameService.deleteGame(gameData, token);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        reset: (state) => initialState,
        setPlayers: (state, action) => {
            if(action.payload === "" || action.payload === null) {
                state.playerCount = 0;
                return;
            }
            state.playerCount = action.payload;
        },
        setMinTime: (state, action) => {
            if(action.payload === "" || action.payload === null) {
                state.minTime = 0;
                return;
            }
            state.minTime = action.payload;
        },
        setMaxTime: (state, action) => {
            if(action.payload === "" || action.payload === null) {
                state.maxTime = 0;
                return;
            }
            state.maxTime = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getGames.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getGames.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.games = action.payload;
        })
        .addCase(getGames.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(addGame.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(addGame.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.games.push(action.payload);
        })
        .addCase(addGame.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        .addCase(deleteGame.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteGame.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.games = state.games.filter(obj => {
                return obj._id !== action.payload.id
            })
        })
        .addCase(deleteGame.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    }
})

export const { reset } = gameSlice.actions;
export default gameSlice.reducer