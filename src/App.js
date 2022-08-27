import './App.css';
import Games from './components/Games/Game';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamesInfo from './components/GamesInfo/GamesInfo';
import Navigation from './components/Nav/Navigation';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "NITRO free games"
  }, []);
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route exact path='/games' element={<Games />} />
          <Route exact path='/gameInfo' element={<GamesInfo />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
