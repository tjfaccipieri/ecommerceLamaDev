import { Trash } from 'phosphor-react';
import React from 'react';
import './Cart.scss';

function Cart() {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Long Sleeve Graphic T-shirt',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis temporibus odio ut nisi? Aliquam quasi reprehenderit nemo quibusdam dolore corrupti accusamus accusantium voluptate, at suscipit magnam perferendis excepturi aut.',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Coat',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis temporibus odio ut nisi? Aliquam quasi reprehenderit nemo quibusdam dolore corrupti accusamus accusantium voluptate, at suscipit magnam perferendis excepturi aut.',
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h2>{item.title}</h2>
            <p>{item.description?.substring(0, 130)}...</p>
            <div className="price">
              1 x{' '}
              {new Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(item.price)}
            </div>
          </div>
          <Trash weight='fill' className='delete' />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>{new Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(19.9)}</span>
      </div>
      <button>proceed to checkout</button>
      <span className='clear'>Clear cart</span>
    </div>
  );
}

export default Cart;
