import { createStore, combineReducers, applyMiddleware ,compose} from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit';

import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer  } from './reducers/userReducers';
import { experiencesReducer, newExperienceReducer, experienceReducer, experienceDetailsReducer, newReviewReducer, experienceReviewsReducer, reviewReducer, myExperiencesReducer  } from './reducers/experienceReducers'
import { lodgingsReducer, newLodgingReducer, lodgingReducer, lodgingDetailsReducer, newReview1Reducer, lodgingReviewsReducer, myLodgingsReducer } from './reducers/lodgingReducers';
import { restaurantsReducer, newRestaurantReducer, restaurantReducer, restaurantDetailsReducer, newReview2Reducer, restaurantReviewsReducer, myRestaurantsReducer   } from './reducers/restaurantReducers';
import { transportsReducer, newTransportReducer, transportReducer, transportDetailsReducer, newReview3Reducer, transportReviewsReducer, myTransportsReducer   } from './reducers/transportReducers';
import { cartReducer, cartLodgingReducer, cartTransportReducer, cartRestaurantReducer } from './reducers/favouriteReducers'
import reservationConfirmedLodgingReducer from "./reducers/reservationConfirmedLodgingReducer";
import reservationConfirmedRestaurantReducer from "./reducers/reservationConfirmedRestaurantReducer";
import reservationConfirmedTransportReducer from "./reducers/reservationConfirmedTransportReducer";
import reservationTotalReducer from "./reducers/reservationTotalReducer";

const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const persistConfig = {
    key: 'root',
    storage,
  };
const rootReducer = combineReducers({

     auth: authReducer,
     user: userReducer,
     allUsers: allUsersReducer,
     userDetails: userDetailsReducer,
     forgotPassword: forgotPasswordReducer,

     experiences: experiencesReducer,
     experienceDetails: experienceDetailsReducer,
     newExperience: newExperienceReducer,
     experience: experienceReducer,
     experienceReviews: experienceReviewsReducer,
     review: reviewReducer,
     newReview: newReviewReducer,
     listExperience: myExperiencesReducer,


     lodgings : lodgingsReducer,
     lodgingDetails: lodgingDetailsReducer,
     newLodging: newLodgingReducer,
     lodging: lodgingReducer,
     review1: newReview1Reducer,
     lodgingReviews: lodgingReviewsReducer,
     listLodging: myLodgingsReducer,


     restaurants : restaurantsReducer,
     restaurantDetails: restaurantDetailsReducer,
     newRestaurant: newRestaurantReducer,
     restaurant: restaurantReducer,
     review2: newReview2Reducer,
     restaurantReviews: restaurantReviewsReducer,
     listRestaurant: myRestaurantsReducer,


     transports : transportsReducer,
     transportDetails: transportDetailsReducer,
     newTransport: newTransportReducer,
     transport: transportReducer,
     review3: newReview3Reducer,
     transportReviews: transportReviewsReducer,
     listTransport: myTransportsReducer,

     cart: cartReducer,
     cartLodging: cartLodgingReducer,
     cartTransport: cartTransportReducer,
     cartRestaurant: cartRestaurantReducer,




     reservationConfirmedLodging: reservationConfirmedLodgingReducer,
     reservationConfirmedRestaurant: reservationConfirmedRestaurantReducer,
     reservationConfirmedTransport:reservationConfirmedTransportReducer,
     reservationTotal: reservationTotalReducer,
     
    
 })



let initialState = {

    auth : {
        userInfo : userInfo

    } ,

    cart: {
       cartItems: localStorage.getItem('cartItems')
           ? JSON.parse(localStorage.getItem('cartItems'))
           : [], 
   

       shippingInfo: localStorage.getItem('shippingInfo')
           ? JSON.parse(localStorage.getItem('shippingInfo'))
           : {},

       
   },
   cartLodging: {
    cartLodging: localStorage.getItem('cartLodging')
        ? JSON.parse(localStorage.getItem('cartLodging'))
        : []    
    },
    cartTransport: {
        cartTransport: localStorage.getItem('cartTransport')
            ? JSON.parse(localStorage.getItem('cartTransport'))
            : []    
    },
    cartRestaurant: {
        cartRestaurant: localStorage.getItem('cartRestaurant')
            ? JSON.parse(localStorage.getItem('cartRestaurant'))
            : []    
    },
    
 }


const middlware = [thunk];
//export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))
export const store = createStore(rootReducer, persistConfig, compose(applyMiddleware(thunk)))

//  default store;

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const middleware = [thunk];
// export const store = createStore(persistedReducer, initialState ,composeWithDevTools(applyMiddleware(...middleware)))
export const persistor = persistStore(store);


