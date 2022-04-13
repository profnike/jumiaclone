import { useReducer, useState } from "react";
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import {ADD_TO_CART,REMOVE_ITEM,REDUCE_ITEM,CLEAR_ALL_ITEM} from '../Types'
import { useEffect } from 'react'


//state
let prev=JSON.parse(localStorage.getItem('cart'))
let stated=[]
console.log( prev)
prev!==null ? (stated=prev) : stated=[]
const CartState=({children})=>{
    const initialState={
        cartItems:  stated.cartItems || []
    };

//reducer

const[state,dispatch]=useReducer(CartReducer,initialState)

//localstotage
useEffect(()=>[
    localStorage.setItem("cart", JSON.stringify(state)),
    console.log(state.cartItems)
    
])


//localstorage

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
const clearallitem= (item) => {
    dispatch({type:CLEAR_ALL_ITEM ,payload:[]})
}


    return(
        <CartContext.Provider value={{
            cartItems:state.cartItems,
            addToCart,
            removeItem,
            reduceItem,
            clearallitem
        }}>
        {children}
        </CartContext.Provider>

    )
}

export default CartState
