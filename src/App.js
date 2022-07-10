import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import './style/LandingPage.css';

function App() {
  return (
    <div>
      <div className='myBG'>
        <NavBar />
        <Intro />
      </div>
    </div>
  );
}

export default App;
