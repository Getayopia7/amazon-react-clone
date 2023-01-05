import React from 'react';
import {FooterData} from '../Asset/Data/FooterData';
import FooterProps from './FooterProps';
import './Footer.css'
import { Link } from 'react-router-dom';
function Footer() {
    const goBackTop=()=>{
        window.scrollTo(0,0);
    }
  return (
    <footer className='footer_wrapper'>
       <button className='footer_backtop' onClick={goBackTop}>Back to Top</button>
       <div className='footer_container'>
        <br /><br /><br /><br /><br /><br />
        <br />
        <div  className='row_wrapper'>
            {FooterData.map((data)=>{
                return(
                    <div className='footer_row'>
                        <FooterProps data={data.one} />
                    </div>

                )
            })}
        </div>

        </div> 
        <Link to="/">
        <img 
        className='header_logo'
        src='https://tse4.mm.bing.net/th?id=OIP.WGxtnw81X7exO2PxiVlL9QHaEK&pid=Api&P=0'
        />

       <h3><span>cloned by: Getachew D.</span></h3>

        </Link>
        
        
        <br /><br />

    </footer>
    
  )
}

export default Footer

