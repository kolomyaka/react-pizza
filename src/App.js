import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages'
import './scss/app.scss';
import { fetchPizzas } from './redux/actions/pizzas'

function App() {
  
  // Инструмент для передачи данных в redux 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPizzas())
  }, []);


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


