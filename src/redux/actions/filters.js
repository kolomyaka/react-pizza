const setSortBy = ( name ) => ({
    type : 'SET_SORT_BY',
    payload : name
});

const setCategoryBy = ( catIndex ) => ({
    type : 'SET_CATEGORY',
    payload : catIndex,
})