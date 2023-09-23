import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import Spinner from '../components/Spinner'
import {getGames, reset} from '../features/games/gameSlice'
import BoardGame from '../components/BoardGame'
<co></co>

function Dashboard() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user} = useSelector((state) => state.auth);
  const {games, isLoading, isError, message} = useSelector((state) => state.games);

  useEffect(() => {
    if(isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    }
    if (user) {
      dispatch(getGames())
    }
    return () => {
      dispatch(reset())
    }
     
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="dash-body">
        
        {games.length > 0 && user ? (
          <table>
            <colgroup>
              <col span="1" style={{width:"380px"}}/>
              <col span="1" style={{width:"80px"}}/>
              <col span="1" style={{width:"80px"}}/>
            </colgroup>
            <thead>
                <tr>
                <th>Name</th>
                <th>Players</th>
                <th>Time</th>
                {/* <th>Publisher</th> */}
                {/* <th>Designer</th> */}
              </tr>
            </thead>
            <tbody>
            {games.map((game) => {
              return (<BoardGame key={game._id} gameID={game._id} game={game} />)
            })}
            </tbody>
          </table>
        ) : (<h3>You have not added any games yet</h3>)}
      </section>
    </>
    
  )
}

export default Dashboard