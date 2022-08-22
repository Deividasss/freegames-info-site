import './App.css';
import Games from './components/Games/Game';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamesInfo from './components/GamesInfo/GamesInfo';
import Navigation from './components/Nav/Navigation';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Games />} />
          <Route exact path='/gameInfo' element={<GamesInfo />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
