import authReducer from "./login/loginreducer";
import {configureStore} from '@reduxjs/toolkit';
import wishlistReducer from "./wishlist/wishlistreducer";
import cartReducer from "./cart/cartreducer";
import { signupReducer } from "./signup/signupreducer";



 const store = configureStore({
    reducer:{
        auth : authReducer,

wishlist:wishlistReducer,
cart: cartReducer, 
signup:  signupReducer 




    }
})
export default store;