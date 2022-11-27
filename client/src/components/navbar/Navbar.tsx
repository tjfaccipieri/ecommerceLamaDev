import React from 'react'
import {CaretDown} from 'phosphor-react'

function Navbar() {
  return (
    <div className='navbar'>
    <div className="wrapper">
      <div className="left">
        <CaretDown size={16} />
      </div>
      <div className="center"></div>
      <div className="right"></div>
    </div>
    </div>
  )
}

export default Navbar