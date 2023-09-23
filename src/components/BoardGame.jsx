import { useDispatch } from "react-redux"
import { deleteGame } from "../features/games/gameSlice"

function BoardGame({game, gameID}) {

    const dispatch = useDispatch()

    return (
        <tr>
            <td>{game.name}</td>
            <td>{game.players}</td>
            <td>{game.time}</td>
            {/* <td>{game.publisher}</td> */}
            {/* <td>{game.designer}</td> */}
        </tr>
    )
}

export default BoardGame