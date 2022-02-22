const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const ADD_PIZZA_CART = 'ADD_PIZZA_CART';

const initialState = {
    items : {},
    totalCount : 0,
    totalPrice : 0,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
        const newItems = {
            ...state.items,
            // Для динамического св-ва указываем кв. скобки
            [action.payload.id] : 
                // В ключ с id пиццы добавляем св-ва
                !state.items[action.payload.id]  // Проверяем есть ли у нас что-то в корзине
                ?[action.payload] // Если нету, то просто создаем новый элемент массива
                :[...state.items[action.payload.id], // Если есть, то копируем все, что есть и добавляем новый
                action.payload],
        };
        // Переменная для получения всех пицц
        // 1. Создаем пустой массив
        // 2. Методом конкат объединяем массивы, которые хранятся в newItems (Наши пиццы)
        const allPizzas = [].concat.apply([], Object.values(newItems));
        
        return {
            ...state,
            items : newItems,
            // Получаем длинну массива, которая и является кол-вом добавленных в корзину пицц
            totalCount : allPizzas.length,
            // Прибавляем цену каждой пицы и получаем итоговую стоимость добавл. товаров в корз
            totalPrice : allPizzas.reduce((sum, obj) => obj.price + sum, 0),
        };
    }   
    case SET_TOTAL_PRICE : 
        return {
            ...state,
            totalPrice : action.payload
        };
    case SET_TOTAL_COUNT:
        return {
            ...state,
            totalCount : action.payload
        };
  default:
    return state;
  }
}

export default cartReducer;