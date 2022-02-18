import axios from 'axios'



// Асинхронная функция, которая возвращает функцию, внутри нее использует dispatch
// Тем самым при получении ответа от сервера изменяем данные в state
export const fetchPizzas = () => (dispatch) => {
    // TODO - Разделить логику получения данных от сервера и отправки данных в редакс
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
        dispatch(setPizzas(data));  // Диспатч уведомляет redux об изменении
    });
};


// action, который возвращает объект и мы его передаем в reducer
export const setPizzas = ( pizzas ) => ({
    type : 'SET_PIZZAS',
    payload : pizzas
});

