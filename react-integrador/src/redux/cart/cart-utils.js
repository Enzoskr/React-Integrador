export const addToCart = (cartItems, product) => {
    const productInCart = cartItems.find((item) =>{
        return item.id === product.id;
    });

    if(productInCart){
        return cartItems.map((item) => {
            return item.id === product.id ?
            {...item, quantity: item.quantity + 1} : item;
        });
        
    }
    return [...cartItems, {...product, quantity: 1}]; 

}

export const removeItemFormCart = (cartItems, id) =>{

    const ProductToRemove = cartItems.find((item) =>{
        return item.id === id;
    })
    if(ProductToRemove.quantity > 1){
        return cartItems.map((item) => {
            return item.id === ProductToRemove.id
            ?{ ...item, quantity: item.quantity - 1}
            :item;
        });
    }
    return cartItems.filter((item) =>{
            return item.id !== ProductToRemove.id;
        })
    }

export const resetShippingCost = (cartItems, shippingCost) => {
    if(cartItems.length === 1 && cartItems[0].quantity === 1){
        return 0;
    }
    return shippingCost;
}



