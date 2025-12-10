import { ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST} from "./wishlistactiontypes";


export const addToWishlist = (product) => {
    
return{
    type:ADD_TO_WISHLIST,
    payload : product,

};
};
export const removeFromWishlist =(id) =>{
    return{
        type:REMOVE_FROM_WISHLIST,
        payload:id,
    };
};
