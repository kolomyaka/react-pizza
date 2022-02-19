import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { setPizzas,fetchPizzas, setLoading } from '../redux/actions/pizzas'
 
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSort } from '../redux/actions/filters'

const categoriesNames = ["Мясные",'Вегетарианские',"Гриль","Острые","Закрытые"];
const sortItems = [{ name : "популярности", type : 'popular' },
                   { name : "цене", type : 'price' },
                   { name : "алфавиту" , type : 'alphabet' }]

const Home = () => {
    // Инструмент для передачи данных в redux.
    const dispatch = useDispatch();

    // useSelector позволяет взять какие-либо данные из state.
    const state = useSelector((state) => {
        return {
          pizzas : state.pizzas.pizzas,
          isLoaded : state.pizzas.isLoaded,
        };
    });

    // Из state берем данные по выбранной категории и сортировке.
    const { category, sortBy } = useSelector(({ filters }) => filters);

    // Функции для передачи данных в redux о выбранной категории/сортировки.
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, [])

    const onSelectSortBy = React.useCallback((index) => {
        dispatch(setSort(index));
    }, [])

    // При изменении выбранных переменных повторно отправляем запрос о получении пицц.
    useEffect(() => {
        dispatch(fetchPizzas())
    }, [category, sortBy]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory} activeCategory={category} items={categoriesNames} />
                <SortPopup items={sortItems} activeSortType={sortBy} onClickItem={onSelectSortBy} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
            
               {
                   !state.isLoaded 
                   ? Array(12)
                   .fill(0)
                   .map((_,index) => <PizzaLoadingBlock key={index} />)
                   : state.pizzas && state.pizzas.map(pizza => <PizzaBlock key={pizza.id} isLoaded={state.isLoaded}{...pizza} />)
               }

            </div>
        </div>
    )
}

export default Home