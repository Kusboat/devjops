import React from 'react'


function Cards({company, logo, logoBackground, position, postedAt, contract, location}) {
  return (
    
     <li>{
      <div className='card-container'>
        <img src={logo} alt={company}/>
        <div className='contents'>
          <p>
          {postedAt}.{contract}
        </p>
        <h2>
          {position}
        </h2>
        <p>
          {company}
        </p>
        <h3>
          {location}
        </h3>
        </div>
      </div>
      }
      </li>
    
    
  )
}

export default Cards