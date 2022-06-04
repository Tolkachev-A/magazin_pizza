const initialState={
    sortBy:'популярности',
    categories:null,
    isLoading:false
}

const SORT_BY= 'SORT_BY'
const IS_LOADING= 'IS_LOADING'
const CATEGORIES= 'CATEGORIES'

export const filterReduser = (state = initialState, action) => {
   switch (action.type){
       case SORT_BY:{
           return {...state, sortBy: action.sortBy}
       }
       case CATEGORIES:{
           return {...state, categories: action.categories}
       }
       case IS_LOADING:{
           return {...state, isLoading: action.isLoading}
       }
       default:return state
   }
};

export  const setSortCategoryBy = (sortBy)=>({type:SORT_BY,sortBy})
export  const setCategory = (categories)=>({type:CATEGORIES,categories})
export  const isLoading = (isLoading)=>({type:IS_LOADING,isLoading})