import axios from 'axios'



// Асинхронная функция, которая возвращает функцию, внутри нее использует dispatch
// Тем самым при получении ответа от сервера изменяем данные в state
export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoading(false));
    // TODO - Разделить логику получения данных от сервера и отправки данных в редакс
    
    axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`).then(({ data }) => {
        dispatch(setPizzas(data));  // Диспатч уведомляет redux об изменении
    });

};

export const setLoading = (val) => ({
    type : 'SET_LOADING',
    payload : val
})

// action, который возвращает объект и мы его передаем в reducer
export const setPizzas = ( pizzas ) => ({
    type : 'SET_PIZZAS',
    payload : pizzas
});

