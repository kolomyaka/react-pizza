const SET_PIZZAS = 'SET_PIZZAS';
const SET_LOADING = 'SET_LOADING';


const initialState = {
    pizzas : [],
    isLoaded : false,
}

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {

  case SET_PIZZAS:
    return {
        ...state,
        pizzas: action.payload,
        isLoaded : true 
    };
  case SET_LOADING:
    return {
      ...state,
      isLoaded : action.payload
    }

  default:
    return state;
  }
}

export default pizzasReducer;