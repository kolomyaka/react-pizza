import { combineReducers } from 'redux';

import filterReducer from './filters';
import pizzasReducer from './pizzas';

// Комбайним наши редюсеры в корневой
const rootReducers = combineReducers({
  filters : filterReducer,
  pizzas : pizzasReducer
})

export default rootReducers;