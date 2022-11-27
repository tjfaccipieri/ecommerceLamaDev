import React from 'react'
import {CaretDown} from 'phosphor-react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
    <div className="wrapper">
      <div className="left">
        <div className='item'>
          <span className="fi fi-us"></span>
          <CaretDown />
        </div>
        <div className='item'>
          <span>USD</span>
          <CaretDown />
        </div>
        <div className='item'>
          <Link to='/products/1'>Women</Link>
        </div>
        <div className='item'>
          <Link to='/products/2'>Men</Link>
        </div>
        <div className='item'>
          <Link to='/products/3'>Children</Link>
        </div>
      </div>
      <div className="center"></div>
      <div className="right"></div>
    </div>
    </div>
  )
}

export default Navbar

// stoped at 18:16 from https://www.youtube.com/watch?v=BCkWFblNLKU&ab_channel=LamaDev