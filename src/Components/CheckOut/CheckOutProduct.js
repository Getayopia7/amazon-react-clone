import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider'
import './CheckOutProduct.css'
function CheckOutProduct({id,title,price,image,rating} ) {
    const[{basket},dispatch]=useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        });
    };
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image} alt="image"/>
    <div className='checkoutProduct_info'>
        <p className='checkoutProduct'>{title}</p>
        <p className='checkoutProduct_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='checkoutProduct_rating'>
            {Array(rating)
            .fill()
            .map(()=>(
                <p>🌟</p>  
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
       </div>
    </div>
  )
}

export default CheckOutProduct