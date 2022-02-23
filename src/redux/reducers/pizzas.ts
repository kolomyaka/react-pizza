import axios from "axios";
import { BaseThunkType, InferActionTypes } from ".";
import { PizzaObj } from "../../types/types";
import { setLoading, setPizzas } from "../actions/pizzas";

const SET_PIZZAS = 'SET_PIZZAS';
const SET_LOADING = 'SET_LOADING';


const initialState = {
    pizzas : null,
    isLoaded : null,
}

export type InitialStateType = typeof initialState;

const pizzasReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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

const actions = {
  setLoading : (val: boolean) => ({ type: SET_LOADING, payload: val}),
  setPizzas : ( pizzas: Array<any> ) => ({ type: SET_PIZZAS, payload:pizzas})
}

type ActionsTypes = InferActionTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>

export const fetchPizzas = (sortBy: number, category: string): ThunkType => async (dispatch: any) => {
  dispatch(setLoading(false));
  // TODO - Разделить логику получения данных от сервера и отправки данных в редакс
  
   axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`).then(({ data }) => {
      dispatch(setPizzas(data));  // Диспатч уведомляет redux об изменении
  });

};



export default pizzasReducer;