export const addItemToCart= (cartitem, cartItemToAdd)=>{
    console.log(cartitem)
    const existingCartItem=cartitem.find((cartitems)=>{

        return(
        cartitems.id===cartItemToAdd.id
        )
    })

    if (existingCartItem){
        return (
            
            cartitem.map((cartitems)=>{

                return(
                   
                cartitems.id===cartItemToAdd.id ? {...cartitems,quantity:cartitems.quantity+(+"1")}:
                cartitems

                )
            })
        )
    }
    return [...cartitem, {...cartItemToAdd,quantity:1}]
}

export const reduceCartitem= (cartitem, cartItemToRemove)=>{
    const existingCartItem=cartitem.find((cartitems)=>{
    return(
        cartitems.id===cartItemToRemove.id
        )
    })

    if (existingCartItem.quantity==1){
        return (
            cartitem.filter((cartItem)=>{

                return(
                cartItem.id!=cartItemToRemove.id
                )
            }) 
        )}
        return(
            cartitem.map((itemcart)=>{

                return(
                itemcart.id==cartItemToRemove.id ? 
                {...itemcart,quantity:itemcart.quantity-1} : itemcart
                          )
            })
        )
}