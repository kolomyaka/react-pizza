import { Header } from './components';
import { Home, Cart } from './pages'
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'

import './scss/app.scss'


function App() {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    // Отправляем запрос для получения db
    
    // 1. Запрос через fetch
      // fetch('http://localhost:3001/db.json')
      // .then((res) => res.json())
      // .then(json => {
      //   setPizzas(json.pizzas)
      // })

    // 2. Запрос через Axios
    axios.get('http://localhost:3001/db.json').then(({data}) => {
      setPizzas(data.pizzas)
    });
  },[]);


  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Routes >
        <Route path='/' element={<Home pizzas={pizzas}/>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;
