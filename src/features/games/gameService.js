import axios from "axios";

const API_URL = "https://lazy-cyan-narwhal-yoke.cyclic.app/api/games"

// Get games
const getGames = async () => {
    const response = await axios.get(API_URL)
    return response.data
}

// Create game
const addGame = async (gameData) => {
    const response = await axios.post(API_URL, gameData)
    return response.data
}

// Change game
const changeGame = async (gameData) => {
    const response = await axios.patch(`${API_URL}${gameData.gameID}`, gameData)
    return response.data
}

// Delete game
const deleteGame = async (gameData) => {
    const response = await axios.delete(`${API_URL}${gameData}`)

    return response.data
}

const gameService = { 
    getGames,
    addGame,
    changeGame,
    deleteGame
}

export default gameService