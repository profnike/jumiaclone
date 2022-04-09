import {ADD_TO_CART,REMOVE_ITEM,REDUCE_ITEM} from '../Types'
import {addItemToCart,reduceCartitem} from '../Cart/Cart.utils'

const CartReducer= (state,action)=>{
    switch(action.type){
        case REMOVE_ITEM :
            return{
                ...state,
                cartItems:state.cartItems.filter(item=>
                    item.id!==action.payload
                    

                )

            }
            case REDUCE_ITEM:
                return({
                    ...state,
                    cartItems:reduceCartitem(state.cartItems, action.payload)
                })
            //pract

            // case CartActionTypes.Add_item:
            //     return({
            //         ...state,
            //        // cartitem:[...state.cartitem, action.payload]
            //        cartitem:addItemToCart(state.cartitem, action.payload)
            //     })
            //     case 'Remove_item':
            //     return({
            //         ...state,
            //         cartitem:state.cartitem.filter((cartitems)=>{
            //             return(
            //             cartitems.id!=action.payload.id
            //             )
        
            //         })
            //        //cartitem:addItemToCart(state.cartitem, action.payload)
            //     })
            //     case 'Reduce_item':
            //     return({
            //         ...state,
            //         cartitem:reduceCartitem(state.cartitem, action.payload)
            //     })
                    
                   //cartitem:addItemToCart(state.cartitem, action.payload)
               

            //end prac
        case ADD_TO_CART:
            return{
                ...state,
                // cartItems: [...state.cartItems,action.payload]
                cartItems:addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state

    }

}

export default CartReducer