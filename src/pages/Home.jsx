import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components';


const Home = ({ pizzas }) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={(item) => console.log(item)} items={[
                    "Все",
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
                   pizzas.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)
               }
            </div>
        </div>
    )
}

export default Home