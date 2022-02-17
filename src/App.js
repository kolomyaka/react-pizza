import { Header } from './components';
import { Home, Cart } from './pages'
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import { useDispatch } from 'react-redux';


import './scss/app.scss';
import { setPizzas } from './redux/actions/pizzas'

function App() {
  
  // Инструмент для передачи данных в redux
  const dispatch = useDispatch();  
  
  

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));  // Диспатч уведомляет redux об изменении
    });
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


