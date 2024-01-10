import headphone from '../../Component/images/headphones.jpg'
import speaker from '../../Component/images/speaker.jpg'
import earbuds from '../../Component/images/earbuds.jpg'
import watch from '../../Component/images/watch.jpg'

const INITIAL_VALUE = {
    products: [
        { id: 1, name: "JBL Headphones", disc: "Experience uncompromis-ing JBL sound wherever you are through wired and wireless technology. ", img: headphone, qty: 1, price: 4999 },
        { id: 2, name: "Echo Dot Speaker", disc: "The sleek, compact design delivers crisp vocals and balanced bass for full sound. stream songs from Amazon Music.", img: speaker, qty: 1, price: 3499 },
        { id: 3, name: "Xiaomi Earbuds", disc: "Redmi Buds Essential. 7.2mm dynamic driver professionally tuned by Xiaomi Acoustic Lab.", img: earbuds, qty: 1, price: 2999 },
        { id: 4, name: "Boat Smart-Watch", disc: "A portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.", img: watch, qty: 1, price: 3299 },
    ],
    cart: []
}

const addCartReducer = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':

            console.log(action.payload);

            return { ...state, cart: [...state.cart, state.products[action.payload]] }
        default:
            return state
    }
}

export default addCartReducer