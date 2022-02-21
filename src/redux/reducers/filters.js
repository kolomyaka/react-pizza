
const initialState = {
    category : null,
    sortBy : 0,
    sortByType : 'rating'
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'SET_SORT_BY':
    return {
        ...state,
        sortBy : action.payload.sortBy,
        sortByType : action.payload.sortByType
    };

  case 'SET_CATEGORY': 
    return {
      ...state,
      category : action.payload
    }; 
    
  default:
    return state
  }
}


export default filterReducer;
