const defaultState = {
    list: [],
    isLoading: false,
    isError: false,
    data: {}
}

export default function categoriesReducer(state=defaultState, action){
    switch (action.type){
        case "ALL_CATEGORIES_PENDING":
            return {...state, isLoading: true}
        case "ALL_CATEGORIES_FULFILLED":
            return {...state, isLoading: false, list: action.payload.data}
        case "ALL_CATEGORIES_REJECTED":
            return {...state, isError: true, isLoading: false}
        default:
            return state
    }
}