import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

interface CardProps {
  item: any;
}

function Card({ item }: CardProps) {
  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src={item.img} alt="" className="mainImage" />
          <img src={item.img2} alt="" className="secondImage" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <s className='oldPrice'><h3>{new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(item.oldPrice)}</h3></s>
          <h3>{new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(item.price)}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
