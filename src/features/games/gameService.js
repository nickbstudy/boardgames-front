import axios from "axios";

const API_URL = "https://lazy-cyan-narwhal-yoke.cyclic.app/api/games"

// Get games
const getGames = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL, config)
    return response.data
}

// Create game
const addGame = async (gameData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, gameData, config)
    return response.data
}

// Change game
const changeGame = async (gameData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.patch(`${API_URL}${gameData.gameID}`, gameData, config)
    return response.data
}

// Delete game
const deleteGame = async (gameData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(`${API_URL}${gameData}`, config)

    return response.data
}

const gameService = { 
    getGames,
    addGame,
    changeGame,
    deleteGame
}

export default gameService