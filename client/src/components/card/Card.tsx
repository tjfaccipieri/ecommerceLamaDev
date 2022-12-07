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
          {item?.attributes.isNew && <span>New Season</span>}
          <img src={item.attributes.img.data.attributes.url} alt="" className="mainImage" />
          <img src={item.attributes.img2.data?.attributes.url || item.attributes.img.data.attributes.url} alt="" className="secondImage" />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <s className='oldPrice'><h3>{new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(item?.attributes.oldPrice || item?.attributes.price + 10)}</h3></s>
          <h3>{new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(item?.attributes.price)}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
