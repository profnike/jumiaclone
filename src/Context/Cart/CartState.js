import { useReducer } from "react";
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import {ADD_TO_CART,REMOVE_ITEM,REDUCE_ITEM} from '../Types'

//state
const CartState=({children})=>{
    const initialState={
        cartItems:[]
    };

//reducer

const[state,dispatch]=useReducer(CartReducer,initialState)

//functions

const addToCart= item => {
    dispatch({type:ADD_TO_CART ,payload:item})
}
const removeItem= id => {
    dispatch({type:REMOVE_ITEM ,payload:id})
}
const reduceItem= item => {
    dispatch({type:REDUCE_ITEM ,payload:item})
}


    return(
        <CartContext.Provider value={{
            cartItems:state.cartItems,
            addToCart,
            removeItem,
            reduceItem
        }}>
        {children}
        </CartContext.Provider>

    )
}

export default CartState
