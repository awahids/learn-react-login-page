import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import './style/LandingPage.css';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Home />
      <NavBar />
    </div>
  );
}

export default App;
