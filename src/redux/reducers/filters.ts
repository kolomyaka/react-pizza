const SET_CATEGORY = 'SET_CATEGORY'
const SET_SORT_BY = 'SET_SORT_BY'

const initialState = {
    category : null,
    sortBy : 0,
    sortByType : 'rating'
};

export type InitialStateType = typeof initialState;



const filterReducer = (state = initialState, action:any): InitialStateType => {
  switch (action.type) {

  case SET_SORT_BY:
    return {
        ...state,
        sortBy : action.payload.sortBy,
        sortByType : action.payload.sortByType
    };

  case SET_CATEGORY: 
    return {
      ...state,
      category : action.payload
    }; 
    
  default:
    return state
  }
}


export default filterReducer;
