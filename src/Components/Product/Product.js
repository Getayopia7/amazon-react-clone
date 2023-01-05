import React from 'react'
import { useStateValue } from '../StateProvider/StateProvider';
import './Product.css'

function Product({id,title,price,rating,image}) {
  //to send data to data layer use dispatch , 
const [{basket},dispatch]=useStateValue();
// console.log('this is the basket', basket)
  const addToBasket=()=>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };
  return (
    <div className='product'>
          <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div  className='product_rating'>
              {Array(rating)
              .fill()
              .map((_, i)=>(
                <p>🌟</p>
              ))}
                
            </div>
          </div>
            
            <img 
            src={image} 
            alt="image" />

            <button onClick={addToBasket}>Add to Basket</button>
    </div>
    
  )
}

export default Product