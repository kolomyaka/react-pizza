import { Header } from './components';
import { Home, Cart } from './pages'
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'
import { connect } from 'react-redux';

import './scss/app.scss'
import { setPizzas as setPizzasAction } from './redux/actions/pizzas'

// function App() {


//   useEffect(() => {
//     // Отправляем запрос для получения db
    
//     // 1. Запрос через fetch
//       // fetch('http://localhost:3000/db.json')
//       // .then((res) => res.json())
//       // .then(json => {
//       //   setPizzas(json.pizzas)
//       // })

//     // 2. Запрос через Axios
//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//       setPizzas(data.pizzas)
//     });
//   },[]);


//   return (
//     <div className="wrapper">
//     <Header />
//     <div className="content">
//       <Routes >
//         <Route path='/' element={<Home pizzas={pizzas}/>} />
//         <Route path='/cart' element={<Cart />} />
//       </Routes>
//     </div>
//   </div>
//   );
// }

const pizzas = [];

class App extends React.Component {
  
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render () {
    console.log(this.props.items);
    return (
      <div className="wrapper">
      <Header />
      <div className="content">
        <Routes >
          <Route path='/' element={<Home pizzas={this.props.items}/>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items : state.pizzas.items
})

const mapDispatchToProps = (dispatch) => ({
  setPizzas : (items) => dispatch(setPizzasAction(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
