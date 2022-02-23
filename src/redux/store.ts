import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';

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