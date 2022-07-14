import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <div>
        <NavBar user={ user } />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={user ? <Navigate to='/' /> : <Login /> }/>
          <Route path='/post/:id' element={ user ? <Post /> : <Navigate to="/login" /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
