import React from 'react'

function FooterProps({data}) {
  return (
    <>
    {data.map((item)=>{
      return (
        <div className='column_render'>

        <h3>
          {item.h3.title}
        </h3>
        <ul>
          {item.h3.Links.map((link)=>{
            return(
              <li>
                <a href='#'>{link}</a>
              </li>
            )
          })}
        </ul>
        
        </div>
      )
    })}
    </>
  )
}

export default FooterProps