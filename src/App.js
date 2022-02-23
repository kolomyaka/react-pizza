import React from 'react';
import { Route, Routes } from 'react-router-dom';


import { Header } from './components';
import Home from './pages/Home'
import Cart from './pages/Cart'
import './scss/app.scss';


function App() {

  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;


