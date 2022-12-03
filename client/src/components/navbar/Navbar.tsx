import React, { useState } from 'react';
import {
  CaretDown,
  Heart,
  MagnifyingGlass,
  ShoppingCartSimple,
  User,
} from 'phosphor-react';
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Cart from '../cart/Cart';

function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <span className="fi fi-us"></span>
            <CaretDown />
          </div>
          <div className="item">
            <span>USD</span>
            <CaretDown />
          </div>
          <div className="item">
            <Link className='link' to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <div className="center">
            <Link className='link' to="/">Lojinha</Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">About</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to="/">Stores</Link>
          </div>
          <div className="icons">
            <MagnifyingGlass size={20} />
            <User size={20} />
            <Heart size={20} />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartSimple size={20} />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>

      {open && <Cart />}
    </div>
  );
}

export default Navbar;

// stoped at 18:16 from https://www.youtube.com/watch?v=BCkWFblNLKU&ab_channel=LamaDev
