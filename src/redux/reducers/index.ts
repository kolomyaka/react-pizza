import { Action, combineReducers } from 'redux';
// @ts-ignore
import filters  from './filters.ts'; import pizzas from './pizzas.ts'; import cart from './cart.ts';

import { ThunkAction } from 'redux-thunk';

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


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



// Т.к вторым параметром в createStore мы передаем devTools, то с помощью compose мы можем передать
// Информацию о том, что хотим подключить thunk к нашему приложению
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Тут создаем хранилище нашего приложения ( Передаем корневой reducer)
const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(thunk))
    );


export default store;

