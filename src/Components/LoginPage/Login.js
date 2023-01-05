import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/firebase';



import './Login.css'
function Login() {
  const navigate = useNavigate();
const[email, setEmail]=useState('');
const[password, setPassword]=useState('');
const singIn=(e)=>{
    e.preventDefault();
    auth
    .signInWithEmailAndPassword(email,password)
    .then((auth)=>{
      navigate('/')
    })
    .catch((error)=>alert(error.message));

}
const register=(e)=>{
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    // .then((auth)=>console.log(auth));
    .then((auth)=>{
      if(auth){
        navigate('/')
      }
    })

    
};

  return (
    <div className='login'>
       <Link to="/">
       <img 
       className='login_logo'
       src='https://tse4.mm.bing.net/th?id=OIP.WGxtnw81X7exO2PxiVlL9QHaEK&pid=Api&P=0'
       alt='sing in picture' />
       </Link>
       <div className='login_container'>
        <h1>Sign-in</h1>

        <form action="">
            <h5>E-mail</h5>
            <input type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            
            />
            <h5>Password</h5>
            <input 
            type="password"
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
            
            />
            <button
            type='submit'
            onClick={singIn}
            className='login_singInButton'
            >
                Sign in
                </button>
        </form>
        <p>
            By signing -in you agree to the AMAZON FAKE ClONE Conditions of Use Sale. Please See Our Privacey Notice, Our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        
     
       <button 
       onClick={register}
       className='login_registerButton'>Create your Amazon accout</button>
  </div>



    </div>
  )
}

export default Login