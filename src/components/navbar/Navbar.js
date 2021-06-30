import React from 'react';
import './Navbar.css'
import navImg from '../../assets/nav.png';
import ham from '../../assets/ham-menu.png'
function Navbar({setButtonToggle}) {
    return (
        <nav class="navbar">
          <div>
          <div className='button-effect'><button className='button' onClick={()=>setButtonToggle('1')}>Apply for IDO</button></div>
          <div className='button-effect'><button className='button' onClick={()=>setButtonToggle('2')}>Launch App</button></div>
          </div>
          <div><img src={navImg}/></div>
         <div className='ham'><img  src={ham} /></div>
       
      </nav>
    )
}

export default Navbar
