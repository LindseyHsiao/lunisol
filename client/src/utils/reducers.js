import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY, 
    UPDATE_SUB_TOTAL
} from './actions';

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart'))||[],
    isCartOpen: false, 
}


export const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:

            return {
                ...state,
                isCartOpen: true,
                cart: [...state.cart, action.product],
            };
        case REMOVE_FROM_CART:
            let newState = state.cart.filter(product => product._id !== action._id)

            return {
                ...state,
                isCartOpen: newState.length > 0,
                cart: newState
            };

        case UPDATE_CART_QUANTITY:

            return {
                ...state,
                isCartOpen: true,
                cart: state.cart.map(product => {
                    //if action id is equal to product id return updated quantity
                    if (action._id === product._id) {
                        //purchaseQuantitiy of the product to equal the purchase quantitiy of the action
                        product.purchaseQuantity = action.purchaseQuantity
                    }
                    return product
                })
            }

            case UPDATE_SUB_TOTAL:

            return {
                ...state,
                isCartOpen: true,
                cart: state.cart.map(product => {
                    //if action id is equal to product id return updated quantity
                    if (action._id === product._id) {
                        //purchaseQuantitiy of the product to equal the purchase quantitiy of the action
                        product.subtotal = action.subtotal
                    }
                    return product
                })
            }
        default:
            return state
    }
}

export default reducers;