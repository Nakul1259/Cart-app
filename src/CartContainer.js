import React from 'react'
import CartItems from './CartItems'
import { useGlobalContext } from './Context'

function CartContainer() {
    const {phone, setPhone} = useGlobalContext()
    if(phone.length === 0){
        return(
            <div className='cart-container'>
            <h1 className='empty' style={{margin: "20px"}} >Your Bag</h1>  
            <h4>is currently empty</h4> 
        </div>
        )
    }
  return (
    <div className='cart-container'>
        <h1 className='empty'>Your Bag</h1>   
        <CartItems />
    </div>
  )
}

export default CartContainer