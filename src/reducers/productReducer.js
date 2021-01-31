const productReducer = (state = {}, action) => {
    switch (action.type) {
        case "POPULATE_PRODUCTS":

            return  {...state, isDispatched: true, url: action.payload}
        case "ERROR":
            return { ...state, error: action.msg }
        default:
            return state
    }

}


export default productReducer