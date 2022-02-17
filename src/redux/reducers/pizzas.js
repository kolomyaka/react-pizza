

const initialState = {
    pizzas : [],
    isLoaded : false,
}

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'SET_PIZZAS':
    return {
        ...state,
        pizzas: action.payload
        // isLoaded : true 
    };

  default:
    return state;
  }
}

export default pizzasReducer;