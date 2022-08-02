import { ADD_TO_FAVOURITE, REMOVE_ITEM_FAVOURITE, SAVE_SHIPPING_INFO } from '../constants/favouriteConstants'

export const cartReducer = (state = { cartItems: [], shippingInfo: {} }, action) => {
    switch (action.type) {

        case ADD_TO_FAVOURITE:
            const item = action.payload;

            const isItemExist = state.cartItems.find(i => i.experience === item.experience)

            if (isItemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i => i.experience === isItemExist.experience ? item : i)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case REMOVE_ITEM_FAVOURITE:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.experience !== action.payload)
            }


        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload
            }


        default:
            return state
    }
}