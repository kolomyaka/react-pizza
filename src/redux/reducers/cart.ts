import { InferActionTypes } from ".";
import { PizzaObj, PizzaObjForCart } from "../../types/types";

const ADD_PIZZA_CART = "ADD_PIZZA_CART";
const CLEAR_CART = "CLEAR_CART";
const DELETE_CURRENT_PIZZA = "DELETE_CURRENT_PIZZA";
const ADD_ONE_ITEM = "ADD_ONE_ITEM";
const REMOVE_ONE_ITEM = "REMOVE_ONE_ITEM";

const initialState = {
  items: null,
  totalCount: 0,
  totalPrice: 0,
};

export type InitialStateType = {
  items : {} | Array<PizzaObjForCart>
  totalCount : number
  totalPrice : number
}

// export type InitialStateType = typeof initialState;

// Функция для подсчета итоговой стоимости в массиве
// Используем здесь, чтобы не производить подсчеты в UI.
const getTotalPrice = (arr: Array<PizzaObj>) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cartReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      const currentPizzaItems = !state.items[action.payload.id] // Проверяем есть ли у нас что-то в корзине
        ? [action.payload] // Если нету, то просто создаем новый элемент массива
        : [...state.items[action.payload.id].items, action.payload]; // Если есть, то копируем все, что есть и добавляем новый

      const newItems = {
        ...state.items,
        // Для динамического св-ва указываем кв. скобки
        [action.payload.id]: {
          // В ключ с id пиццы добавляем объект
          items: currentPizzaItems, // Объект с пиццой и ее хар-ми
          totalPrice: getTotalPrice(currentPizzaItems), // Метод для подсчета общей стоимости
        },
      };
      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0
      );

      return {
        ...state,
        items: newItems,
        // Получаем длинну массива, которая и является кол-вом добавленных в корзину пицц
        totalCount,
        // Прибавляем цену каждой пицы и получаем итоговую стоимость добавл. товаров в корз
        totalPrice,
      };
    }
    case CLEAR_CART: // Очистка корзины
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    case DELETE_CURRENT_PIZZA: {
      const newItems = {
        ...state.items,
      };
      const priceDeleteItem = newItems[action.payload].totalPrice; // Сохр. значение цены пиццы, которую хотим удалить
      const countDeleteItem = newItems[action.payload].items.length; // Сохр. знач. кол-ва пицц, которую хотим удалить
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - priceDeleteItem,
        totalCount: state.totalCount - countDeleteItem,
      };
    }
    case ADD_ONE_ITEM: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0
      );
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice
      };
    }
    case REMOVE_ONE_ITEM: {
        const currentItems = state.items[action.payload].items;
        const newObjItems = currentItems.length > 1 ? state.items[action.payload].items.slice(1) : currentItems;
        
        const newItems = {
          ...state.items,
          [action.payload]: {
            items: newObjItems,
            totalPrice: getTotalPrice(newObjItems),
          },
        };
        
        
        const totalCount = Object.keys(newItems).reduce(
          (sum, key) => newItems[key].items.length + sum,
          0
        );
        const totalPrice = Object.keys(newItems).reduce(
          (sum, key) => newItems[key].totalPrice + sum,
          0
        );
        
        return {
          ...state,
          items: newItems,
          totalCount,
          totalPrice
        };
    }
    default:
      return state;
  }
};

const actions = {
  addPizzaToCart : (pizzaObj: any) => ({ type : ADD_PIZZA_CART,payload: pizzaObj } as const), 
  clearCart : () => ({ type : CLEAR_CART} as const),
  deleteCurrentPizza : (id: number) => ({ type: DELETE_CURRENT_PIZZA,payload: id} as const),
  addOneItem : (id: number) => ({ type: ADD_ONE_ITEM,payload: id} as const),
  removeOneItem : (id: number) => ({ type: REMOVE_ONE_ITEM,payload: id} as const),
}

type ActionsTypes = InferActionTypes<typeof actions>


export default cartReducer;
