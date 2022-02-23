export const setSort = ( sortBy: number, sortByType: string ) => ({
    type : 'SET_SORT_BY',
    payload : {
        sortBy,
        sortByType
    }
});

export const setCategory = ( catIndex: number ) => ({
    type : 'SET_CATEGORY',
    payload : catIndex,
})
