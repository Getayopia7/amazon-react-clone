
import React, { useState } from 'react'
// import * as Mui from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { MobileStepper } from '@mui/material';
import { useTheme } from '@emotion/react';





const BannerCollection=[
    {
        label:"First ",
        imgPath:
        "https://www.amazon.com/deals?pf_rd_r=KFEXACRG5NCXS8G7AGYA&pf_rd_p=9f80f3fd-ab63-483a-8a72-ef6c4eb80ce4&pd_rd_r=25fb0fab-6701-47ea-a322-9a47dd0b14a9&pd_rd_w=on2Gk&pd_rd_wg=ZyFKZ&ref_=pd_gw_unk"
    },
    {
        label:"second",
        imgPath:
        "https://tse3.mm.bing.net/th?id=OIP.QnhR3l8d02LRwkpQtEpcqwHaB2&pid=Api&P=0",
    },
    {
        label:"third",
        imgPath:
        "https://tse4.mm.bing.net/th?id=OIP.rOAEmILhJ2ua6Uh2RzOaVgHaCT&pid=Api&P=0",
    }
    ]
function Banner() {
    const[index,setIndex]=useState(0);
    const theme=useTheme();
    const nextPicture=()=>{
        setIndex((prevStep)=>prevStep+1);
    };
    const collectionSize=BannerCollection.length
  
  return (
    <div className='banner'>
        <div className='banner-img'>
            <img 
            src={BannerCollection[index].imgPath}
            alt={BannerCollection[index].label}
            />
            <MobileStepper 
            className='mobile-stepper'
            index={index}
            steps={collectionSize}
            nextButton={
                <button 
                onClick={nextPicture} >
                    Next
               </button>
            }
            />

        </div>

    </div>
  )
}

export default Banner