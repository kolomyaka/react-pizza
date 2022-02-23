import { PizzaObj } from "../../types/types"
import { actionsConstCart } from "./constForReducer"

export const cartActions = {
    addPizzaToCart : (pizzaObj: PizzaObj) => ({ type : actionsConstCart.ADD_PIZZA_CART, pizzaObj } as const), 
    clearCart : () => ({ type : actionsConstCart.CLEAR_CART} as const),
    deleteCurrentPizza : (id: number) => ({ type: actionsConstCart.DELETE_CURRENT_PIZZA, id} as const),
    addOneItem : (id: number) => ({ type: actionsConstCart.ADD_ONE_ITEM, id} as const),
    removeOneItem : (id: number) => ({ type: actionsConstCart.REMOVE_ONE_ITEM, id} as const),
}