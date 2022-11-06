import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import logo from './logo.svg';
import Nav from './components/Nav';
import SportsNav from './components/SportsNav'
import './App.css';
import Homepage from './components/pages/Homepage.jsx'
import Scores from './components/Scores.jsx'
import { useEffect, useState } from 'react';
import DataCall from './components/DataCall'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    DataCall()
    .then((res) => {setData(res)})
  }, [])
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
        <Route
          path='/:league'
          element={<Scores 
          props={data}
          />}
        />
      </Routes>
    </Router>
  );
}

export default App;
