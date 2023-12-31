import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';

// External API address:  https://lazy-cyan-narwhal-yoke.cyclic.app

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="headerContainer">
            <Header />
          </div>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
