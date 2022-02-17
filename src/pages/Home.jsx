import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';
import { setCategory } from '../redux/actions/filters'

const Home = () => {

    const dispatch = useDispatch();

    // useSelector позволяет взять какие-либо данные из state
    const state = useSelector((state) => {
        return {
          pizzas : state.pizzas.pizzas,
        };
    });

    const onSelectCategory = (index) => {
        dispatch(setCategory(index));
    }
    
    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory} items={[
                    "Мясные",
                    'Вегетарианские',
                    "Гриль",
                    "Острые",
                    "Закрытые",
                ]} />
                <SortPopup items={[
                    { name : "популярности", type : 'popular' },
                    { name : "цене", type : 'price' },
                    { name : "алфавиту" , type : 'alphabet' }
                ]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
               {
                  state.pizzas && state.pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)
               }
            </div>
        </div>
    )
}

export default Home