import React from 'react'
import logo from '../assets/images/200 1.png'
import frame from '../assets/images/Frame 103.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <div className='logo'>
            <img src={logo} alt="logo" />
            </div>
            <div className='frame'>
             <img src={frame} alt="" />
            </div>
           <div className='logoutbtn'> <button>Log Out</button></div>
        </nav>
    </div>
  )
}

export default Navbar