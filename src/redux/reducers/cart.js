const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const ADD_PIZZA_CART = 'ADD_PIZZA_CART';
const CLEAR_CART = 'CLEAR_CART';
const DELETE_CURRENT_PIZZA = 'DELETE_CURRENT_PIZZA';

const initialState = {
    items : {},
    totalCount : 0,
    totalPrice : 0,
}

// Функция для подсчета итоговой стоимости в массиве
// Используем здесь, чтобы не производить подсчеты в UI.
const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
        const currentPizzaItems = !state.items[action.payload.id] // Проверяем есть ли у нас что-то в корзине
        ? [action.payload] // Если нету, то просто создаем новый элемент массива
        : [...state.items[action.payload.id].items, action.payload];   // Если есть, то копируем все, что есть и добавляем новый
        
        const newItems = {
            ...state.items,
            // Для динамического св-ва указываем кв. скобки
            [action.payload.id] : { // В ключ с id пиццы добавляем объект
                items : currentPizzaItems, // Объект с пиццой и ее хар-ми
                totalPrice : getTotalPrice(currentPizzaItems) // Метод для подсчета общей стоимости
            },

        };
        // Переменная для получения всех пицц
        // 1. Создаем пустой массив
        // 2. Методом конкат объединяем массивы, которые хранятся в newItems (Наши пиццы)
        const items = Object.values(newItems).map(obj => obj.items); 
        const allPizzas = [].concat.apply([], items);
        const totalPrice = getTotalPrice(allPizzas)
        
        return {
            ...state,
            items : newItems,
            // Получаем длинну массива, которая и является кол-вом добавленных в корзину пицц
            totalCount : allPizzas.length,
            // Прибавляем цену каждой пицы и получаем итоговую стоимость добавл. товаров в корз
            totalPrice
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
    case CLEAR_CART : // Очистка корзины
        return {
            items : {},
            totalPrice : 0,
            totalCount : 0
        }
    case DELETE_CURRENT_PIZZA : {
        const newItems = {
            ...state.items
        }
        delete newItems[action.payload];
        return {
            ...state,
            items: newItems
        }
    }
  default:
    return state;
  }
}

export default cartReducer;