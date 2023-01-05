import React, { useEffect } from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import CheckOut from '../CheckOut/CheckOut'
import { auth } from '../Firebase/firebase'
import Home from '../Home/Home'
import Login from '../LoginPage/Login'
import Payment from '../Payment/Payment'
import { useStateValue } from '../StateProvider/StateProvider'
import {loadStripe} from '@stripe/stripe-js'
import {Element, Elements} from '@stripe/react-stripe-js'
import Header from '../Header/Header'
import Orders from '../Orders/Orders'
import Footer from '../Footer/Footer'
import Prime from '../Prime/Prime'

const promise = loadStripe(
	'pk_test_51MLk0iCS4CdlkBIpSUHA5H5Yv0aIgN0zmSiEXD7MDdf5NQwRCvnJxkGKCTlCjQ5KOGQz5Ku6p55VIXAyqXdE3bP000xwR2W9VQ'
);

function Routing() {
  // when once authenticate it will show in side the home page the email lavel
  // this is where put the info  on the data layer
  const[{},dispatch]=useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:'SET_USER',
          user: authUser,
        });
      } else{
        dispatch({
          type:'SET_USER',
          user: null,
        })
      }
    })
  },[])

  return (
   <BrowserRouter>
        <Routes>
           <Route path="/" element={<><Header /> <Home /></>} 
           />
           <Route path="/checkout" element={ 
           <>
           <Header />
           <CheckOut />
           <Footer />
           </>} />
           <Route path='/Orders' element={<> <Header />
           <Orders/>
           </>} />
           <Route path="/login" element={<Login />} />
           <Route path='/payment' element ={
           <>
            <Header /> 
            <Elements stripe={promise}>
           <Payment />
           </Elements>
          </>
           } />
           <Route path='/prime' element={
           <> 
           <Header /> 
           <Prime/>
           </>
            }
            />
        </Routes>
    </BrowserRouter>

  )
}

export default Routing