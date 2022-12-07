import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Calc from './pages/Calc';
import Home from './pages/Home';
import Quote from './pages/Quote';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calc />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>

    </div>
  );
}

export default App;
