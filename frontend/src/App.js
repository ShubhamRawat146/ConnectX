
import './App.css';
import { Navigate, Routes , Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import {useState} from 'react';
import RefreshHandler from './RefreshHandler';

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const PrivateRoute = ({element}) => {
    return isAuthenticated ? element : <Navigate to="/login"/>
  }
  return (
    <div className="App">
      <RefreshHandler setisAuthenticated={setisAuthenticated}/>
      <Routes>
        <Route path='/' element={<Navigate to = "/login"/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<PrivateRoute element={<Home/>}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
