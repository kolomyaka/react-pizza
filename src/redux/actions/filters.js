export const setSort = ( sortBy, sortByType ) => ({
    type : 'SET_SORT_BY',
    payload : {
        sortBy,
        sortByType
    }
});

export const setCategory = ( catIndex ) => ({
    type : 'SET_CATEGORY',
    payload : catIndex,
})
