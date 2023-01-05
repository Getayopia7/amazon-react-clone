import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../Firebase/firebase';
function Header() {
  const [{basket, user},dispatch]=useStateValue();
  //  sign out it is  built in method 
  const handleAuthentication = ()=>{
    if(user){
       auth.signOut();
    }
  };
  return (
    <div className='header'>
      <Link to="/">
        <img 
        className='header_logo'
        src='https://tse4.mm.bing.net/th?id=OIP.WGxtnw81X7exO2PxiVlL9QHaEK&pid=Api&P=0'
        />
        </Link>
        <div className='header_search'>
          <input type="text" className='header_searchInput' />
          <SearchIcon className='header_searchIcon' />
        </div>

        <div className='header_nav'>
          {/* if there is no user take to the login option, unless it stay there and clear the user */}
         <Link to={!user && "/login" } className='user_login'>
          <div onClick={handleAuthentication}  
          className='header_option signIN'>
           
            <span className='header_optionOne'>Hello {!user?'Guest':user?.email}</span>
            
            <span className=' signInIn header_optionTwo'> {user?'Sign Out':'Sign In'}</span>
          
          </div>
          </Link>
         
         <Link to='/Orders' className='return_orders'>
          <div className='header_option '>
            <span className='header_optionOne'>Return</span>
            <span className='header_optionTwo'>& Orders</span>
          </div>
          
          </Link>

          <Link to='/prime' className='your_prime'>
          <div className='header_option'>
            <span className='header_optionOne'>Your</span>
            <span className='header_optionTwo'>Prime</span>
          </div>
          </Link>
          <Link to="/checkout">
          <div className='header_optionalBasket'>
            <AddShoppingCartIcon />
            <span className='header_optionLineTwo heaer_basketCount'>{basket.length}</span>
          </div>
          </Link>
        </div>
    </div>
  )
}

export default Header