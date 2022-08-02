import axios from 'axios'
import { ADD_TO_FAVOURITE, REMOVE_ITEM_FAVOURITE, SAVE_SHIPPING_INFO } from '../constants/favouriteConstants'

export const addItemToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/experience/${id}`)

    dispatch({
        type: ADD_TO_FAVOURITE,
        payload: {
            experience: data.experience._id,
            name: data.experience.exptitle,
            theme: data.experience.theme,
            price: data.experience.price,
            place: data.experience.location,
            image: data.experience.YourIdeaImage[0].url,   
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeItemFromCart = (id) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_ITEM_FAVOURITE,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}

export const saveShippingInfo = (data) => async (dispatch) => {

    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data
    })

    localStorage.setItem('shippingInfo', JSON.stringify(data))

}