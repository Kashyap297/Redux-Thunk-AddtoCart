import headphone from '../../Component/images/headphones.jpg'
import speaker from '../../Component/images/speaker.jpg'
import earbuds from '../../Component/images/earbuds.jpg'
import watch from '../../Component/images/watch.jpg'

const INITIAL_VALUE = {
    products: [
        { id: 0, name: "JBL Headphones", disc: "Experience uncompromis-ing JBL sound wherever you are through wired and wireless technology. ", img: headphone, qty: 1, price: 4999 },
        { id: 1, name: "Echo Dot Speaker", disc: "The sleek, compact design delivers crisp vocals and balanced bass for full sound. stream songs from Amazon Music.", img: speaker, qty: 1, price: 3499 },
        { id: 2, name: "Xiaomi Earbuds", disc: "Redmi Buds Essential. 7.2mm dynamic driver professionally tuned by Xiaomi Acoustic Lab.", img: earbuds, qty: 1, price: 2999 },
        { id: 3, name: "Boat Smart-Watch", disc: "A portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases.", img: watch, qty: 1, price: 3299 },
    ],
    cart: [],
    bag: 0, //here bag means : No. of products in cart
    totalAmount: 0
}

const addCartReducer = (state = INITIAL_VALUE, action) => {

    // console.log([...state.products][0].name);
    switch (action.type) {
        case 'ADD_TO_CART':
            // console.log(action.payload);

            if (!state.cart || state.cart.length === 0) {
                const newItem = { ...state.products[action.payload], qty: 1, subtotal: state.products[action.payload].price }
                return { ...state, cart: [newItem], bag: 1, totalAmount: newItem.subtotal };
            } else {
                const tempCart = [...state.cart]
                const checkCart = tempCart.some((e) => {
                    if (e.name === state.products[action.payload].name) {
                        e.qty++;
                        e.subtotal = e.qty * e.price;
                        return true
                    }
                    return false
                })


                if (!checkCart) {
                    const newItem = { ...state.products[action.payload], qty: 1, subtotal: state.products[action.payload].price };
                    return { ...state, cart: [...state.cart, newItem], bag: state.bag + 1, totalAmount: state.totalAmount + newItem.subtotal };
                } else {
                    const grandTotal = tempCart.reduce((total, item) => total + item.subtotal, 0);
                    return { ...state, cart: tempCart, totalAmount: grandTotal };
                }
            }

        case 'ITEM_INCREMENT':
            var itemIndex = action.payload;
            const incrementedItem = state.cart.map((item, index) => {
                // console.log(item);
                if (index === itemIndex) {
                    return { ...item, qty: item.qty + 1, subtotal: (item.qty + 1) * item.price }
                }
                return item
            })
            console.log('incrementedItem', incrementedItem)
            const updatedTotalIncrement = incrementedItem.reduce((total, item) => total + item.subtotal, 0);
            console.log('updatedTotalIncrement', updatedTotalIncrement)
            return { ...state, cart: incrementedItem, totalAmount: updatedTotalIncrement }

        case 'ITEM_DECREMENT':
            var itemIndex = action.payload;
            let bag = state.bag
            const decrementedItem = state.cart.map((item, index) => {
                if (index === itemIndex && item.qty > 1) {
                    return { ...item, qty: item.qty - 1, subtotal: (item.qty - 1) * item.price }
                } else if (index === itemIndex && item.qty === 1) {
                    bag -= 1
                    return null
                }
                return item
            }).filter(Boolean);
            // console.log(decrementedItem)
            const updatedTotalDecrement = decrementedItem.reduce((total, item) => total + item.subtotal, 0);
            return { ...state, cart: decrementedItem, totalAmount: updatedTotalDecrement,bag }

        case 'ITEM_DELETE':
            const deleteItemIndex = action.payload
            const deleteItem = state.cart[deleteItemIndex]

            if (deleteItem) {
                const updatedTotalAmount = state.totalAmount - deleteItem.subtotal;
                const updatedCart = state.cart.filter((item, index) => index !== deleteItemIndex);
                return { ...state, cart: updatedCart, bag: state.bag - 1, totalAmount: updatedTotalAmount };
            }
            return state

        default:
            return state
    }
}

export default addCartReducer