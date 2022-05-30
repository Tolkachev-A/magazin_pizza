const initialState={
    sortBy:'популярности',
    categories:null
}

const SORT_BY= 'SORT_BY'
const CATEGORIES= 'CATEGORIES'

export const Filters = (state = initialState, action) => {
   switch (action.type){
       case SORT_BY:{
           return {...state, sortBy: action.sortBy}
       }
       case CATEGORIES:{
           return {...state, categories: action.categories}
       }
       default:return state
   }
};

export  const setSortCategoryBy = (sortBy)=>({type:SORT_BY,sortBy})
export  const setCategory = (categories)=>({type:CATEGORIES,categories})