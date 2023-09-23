import { useState } from 'react'
import {FaSignInAlt, FaSignOutAlt, FaUser, FaRegPlusSquare, FaSort } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)


    const onLogout = () => {
        console.log('@function')
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

  return (
    <>
        <header className="header">
            <div className="headerActions" style={{whiteSpace: 'nowrap', display: 'flex', flexGrow: '1', width: '600px'}}>
                <span className="logo">Game Suggester</span>
                    
                    
            </div>
            <ul>
                {user ? (
                    <li style={{display: 'flex'}}> 
                        <span style={{marginRight: '10px', fontSize: '1.3em', transform: 'translate(0px, 3px)'}}>{user.name}</span>
                    <button className="btn" onClick={onLogout} >
                        <FaSignOutAlt /> <span className="logout-words">Logout</span>
                    </button>
                </li>
                ) : 
                (
                    <>
                        <li>
                            <Link to='login'>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to='register'>
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                )}
                
            </ul>

        </header>
        {/* <dialog name="modal" id="modal">
            <form>
                <div className="addContainer">
                    <div><label htmlFor="newName">Herb name:</label><br />
                    <input type="text" name="newName" id="newName" value={newName} onChange={(e) => setNewName(e.target.value)}/></div>
                    <div><label htmlFor="newExpiry">Expiry:</label><br />
                    <input type="month" name="newExpiry" id="newExpiry" value={newExpiry} onChange={(e) => setNewExpiry(e.target.value)}/></div>
                    <div className="modalButtons">
                        <button type="submit" onClick={handleAddHerb} className="newAdd">Add Herb</button>
                        <button className="newCancel" onClick={cancelAddHerb}>Cancel</button>
                    </div>
                </div>
            </form>
            
        </dialog> */}
    </>
  )
}

export default Header