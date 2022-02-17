import { createStore } from 'redux';

import rootReducers from './reducers'

// Тут создаем хранилище нашего приложения ( Передаем корневой reducer)
const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

export default store;