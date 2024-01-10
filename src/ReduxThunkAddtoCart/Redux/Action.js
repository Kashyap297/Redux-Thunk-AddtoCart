
export const addToCart = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: id,
        })
    }

    // return {
    //     type : 'ADD_TO_CART',
    //     payload : id,
    // }
}

export const incrementItem = (id) => {
    return(dispatch) => {
        dispatch({
            type : "ITEM_INCREMENT",
            payload : id,
        })
    }
}
export const decrementItem = (id) => {
    return(dispatch) => {
        dispatch({
            type : "ITEM_DECREMENT",
            payload : id,
        })
    }
}