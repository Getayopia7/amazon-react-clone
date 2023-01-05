import {CardElement, useElements, useStripe, } from '@stripe/react-stripe-js';
import axios from '../axios'
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useNavigate } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
import CheckOutProduct from '../CheckOut/CheckOutProduct';
import { useStateValue } from '../StateProvider/StateProvider';
import './Payment.css'
import { db } from '../Firebase/firebase';
function Payment() {
    const navigate = useNavigate()
    const[{basket, user}, dispatch]= useStateValue();
   const getBasketTotal=(basket)=>
   basket?.reduce((amount,item)=>item.price + amount,0)

    const stripe=useStripe();
    const elements=useElements();

    const [error, setError]=useState(null);
    const [disabled,setDisabled]=useState(true)

    const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    
	useEffect(()=>{
		const getClientSecret= async ()=>{
			const response = await axios({
				method:'post',
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`,

			});
			setClientSecret(response.data.clientSecret);
		};
     getClientSecret()
	},[basket]);
	console.log('secret z gech', clientSecret);
   
	const handleSubmit=async(e)=>{
       e.preventDefault();
       setProcessing(true);

	   const payload = await stripe.confirmCardPayment(clientSecret, {
		payment_method: {
			card:elements.getElement(CardElement),
		}
	}).then(({ paymentIntent }) => {
		// this paymentIntent thing is for payment confirmation
		db.collection('users')
			.doc(user?.uid)
			.collection('orders')
			.doc(paymentIntent.id)
			.set({
				basket: basket,
				amount: paymentIntent.amount,
				created: paymentIntent.created
			});
		
		setSucceeded(true);
		setError(null);
		setProcessing(false);
		dispatch({
			type: 'EMPTY_BASKET'
		});
		navigate('/orders');
	})
    }
     
    const handleChange=(e)=>{   
            setDisabled(e.empty);
            setError(e.error ? e.error.message : "");
    }

  return (
    <div className="payment">
			<div className="payment_container">
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>)
				</h1>
				<div className="payment_section">
					<div className="payment_title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment_address">
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Chicago, IL</p>
					</div>
				</div>
				<div className="payment_section">
					<div className="payment_title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment_items">
						{basket.map((item) => (
							<CheckOutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div className="payment_section">
					<div className="payment_title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment_details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment_priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total:{value}</h3>}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;

//     <div className='payment'>
//         <div className='payment_container'>
//             <h1>
//                 Checkout (<Link to="/checkout">{basket?.length} items</Link>)
//             </h1>
//             <div className='payment_section'>
//                 <div className='payment_title'>
//                     <h3>Delivery Address</h3>
//                 </div>
//                 <div className='payment_address'>
//                     <p>{user?.email}</p>
//                     <p>road 345</p>
//                     <p>seattle, st</p>
//                 </div>
//                 <div className='payment_section'>
//                     <div className='payment_title'>
//                         <h3>Review items and delivery</h3>
//                     </div>
//                     <div className='payment_items'>
//                         {basket?.map((item)=>(
//                             <CheckOutProduct 
//                             id={item.id}
//                             title={item.title}
//                             image={item.image}
//                             price={item.price}
//                             rating={item.rating}
//                             />
//                         ))}
//                     </div>
//                 </div>
//                 <div className='payment-section'>
//                     <div className='payment_title'>
//                         <h3>payment Method</h3>
//                     </div>
//                      <div className='payment_details'>
//                          <form 
//                         onSubmit={handleSubmit}
//                         >
//                             <CardElement onChange={handleChange} />
//                             <div className='payment_priceContainer'>
//                                 <CurrencyFormat 
//                                 renderText={(value)=><h3>Order Total:{value}</h3>}
//                                 decimalScale={2}
//                                 value={getBasketTotal(basket)}
//                                 displayType={'text'}
//                                 thousandSeparator={true}
//                                 prefix={'$'}
//                                 />
//                                  <button disabled={processing || disabled || succeeded}>
// 									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
// 								</button> 
//                             </div>
//                           {error && <div>{error}</div>}
//                         </form> 

//                     </div> 
//                 </div>

//             </div>

//         </div>
//     </div>
//   )
// }

// export default Payment








