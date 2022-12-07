import { Trash } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import './Cart.scss';


function Cart() {
  const products = useSelector((state: any) => state.cart.products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item: any) => {
      total += item.quantity * item.price;
    })
    return total
  }

  const dispatch = useDispatch()

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item: any) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h2>{item.title}</h2>
            <p>{item.description?.substring(0, 130)}...</p>
            <div className="price">
              {item.quantity} x{' '}
              {new Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(item.price)}
            </div>
          </div>
          <Trash weight='fill' className='delete' onClick={() => dispatch(removeItem(item.id))} />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>{new Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(totalPrice())}</span>
      </div>
      <button>proceed to checkout</button>
      <span className='clear' onClick={() => dispatch(resetCart())}>Clear cart</span>
    </div>
  );
}

export default Cart;
