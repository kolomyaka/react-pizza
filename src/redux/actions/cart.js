export const addPizzaToCart = (pizzaObj) => ({
    type : "ADD_PIZZA_CART",
    payload : pizzaObj
})

export const clearCart = () => ({
    type : 'CLEAR_CART',
})

export const deleteCurrentPizza = (id) => ({
    type : 'DELETE_CURRENT_PIZZA',
    payload : id
})

