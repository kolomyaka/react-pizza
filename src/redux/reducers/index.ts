import { Action, combineReducers } from 'redux';

import filters from './filters';
import pizzas from './pizzas';
import cart from './cart';
import { ThunkAction } from 'redux-thunk';

// Комбайним наши редюсеры в корневой
const rootReducers = combineReducers({
  filters,
  pizzas,
  cart,
})

type ReducerType = typeof rootReducers; // (globalstate : AppStateType) => AppStateType

export type AppStateType = ReturnType<ReducerType>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U} ? U : never
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

export default rootReducers;