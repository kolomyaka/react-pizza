import { combineReducers } from 'redux';

import filters from './filters';
import pizzas from './pizzas';
import cart from './cart';

// Комбайним наши редюсеры в корневой
const rootReducers = combineReducers({
  filters,
  pizzas,
  cart,
})

export default rootReducers;