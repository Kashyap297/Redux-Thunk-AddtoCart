
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