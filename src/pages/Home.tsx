import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchPizzas } from '../redux/actions/pizzas' 
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
// @ts-ignore
import { setCategory, setSort } from '../redux/actions/filters.ts'; import { addPizzaToCart } from '../redux/actions/cart.ts'
import { AppStateType } from '../redux/reducers';





const categoriesNames = ["Мясные",'Вегетарианские',"Гриль","Острые","Закрытые"];
const sortItems = [{ name : "популярности", type : 'rating' },
                   { name : "цене", type : 'price' },
                   { name : "алфавиту" , type : 'name' }]

const Home = () => {
    // Инструмент для передачи данных в redux.
    const dispatch = useDispatch();

    // useSelector позволяет взять какие-либо данные из state.
    const { pizzas, isLoaded} = useSelector<AppStateType, any>(({ pizzas }) => pizzas);

    // @ts-ignore
    const cartItems = useSelector(({cart}) => cart.items);

    console.log(pizzas);
    console.log(cartItems);
    
    

    // Из state берем данные по выбранной категории и сортировке.
    const { category, sortBy, sortByType } = useSelector<AppStateType, any>(({ filters }) => filters);

    // Функции для передачи данных в redux о выбранной категории/сортировки.
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortBy = React.useCallback((index, sortByType) => {
        dispatch(setSort(index, sortByType));
    }, []);

    // При изменении выбранных переменных повторно отправляем запрос о получении пицц.
    useEffect(() => {
        dispatch(fetchPizzas(sortByType,category))
    }, [sortBy, category,sortByType]);
    
    const handleAddPizza = obj => {
        dispatch(addPizzaToCart(obj));
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory} activeCategory={category} items={categoriesNames} />
                <SortPopup items={sortItems} activeSortType={sortBy} onClickItem={onSelectSortBy} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
            
               {
                   !isLoaded 
                   ? Array(12)
                   .fill(0)
                   .map((_,index) => <PizzaLoadingBlock key={index} />)
                   : pizzas && pizzas.map(pizza => <PizzaBlock key={pizza.id}
                    onClickAddPizza={handleAddPizza} addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length} {...pizza} />)
               }

            </div>
        </div>
    )
}

export default Home