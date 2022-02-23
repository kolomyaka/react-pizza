import { PizzaObj } from "../../types/types"

export const addPizzaToCart = (pizzaObj: PizzaObj) => ({
    type : "ADD_PIZZA_CART",
    payload : pizzaObj
})

export const clearCart = () => ({
    type : 'CLEAR_CART',
})

export const deleteCurrentPizza = (id: number) => ({
    type : 'DELETE_CURRENT_PIZZA',
    payload : id
})

export const addOneItem = (id: number) => ({
    type: "ADD_ONE_ITEM",
    payload: id
})

export const removeOneItem = (id: number) => ({
    type: "REMOVE_ONE_ITEM",
    payload: id
})

