import './App.css';
import Games from './components/Games/Game';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GamesInfo from './components/GamesInfo/GamesInfo';
import Navigation from './components/Nav/Navigation';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Games />} />
          <Route exact path='/gameInfo' element={<GamesInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
