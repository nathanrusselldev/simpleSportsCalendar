import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import logo from './logo.svg';
import Nav from './components/Nav';
import SportsNav from './components/SportsNav'
import './App.css';
import Homepage from './components/pages/Homepage.jsx'
import navBar from './components/Nav';

function App() {
  return (
    <Router>
      <div className='navs'>
        <Nav />
        <SportsNav />
      </div>
      <Routes>
        <Route
          path='/'
          element={<Homepage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
