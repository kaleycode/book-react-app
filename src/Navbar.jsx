import React from 'react';
import Logo from './book.png';

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='leftSide'></div>
        <img src={Logo}/>
        <div className='rightSide'></div>
    </div>
  )
}

export default Navbar
