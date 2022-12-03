import { Heart, Scales, ShoppingBag, ShoppingCartSimple } from 'phosphor-react';
import React, { useState } from 'react';
import './Product.scss';

function Product() {
  const [selectedImage, setSelectedImage] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const images = [
    'https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1600',
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImage(1)} />
        </div>

        <div className="mainImg">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="top">
        <h1>Just a high quality jeans</h1>
        <span className='price'>
          {new Intl.NumberFormat('pt-br', {
            currency: 'BRL',
            style: 'currency'
          }).format(199)}
        </span>
        <p className='description'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          dolorum corrupti optio architecto. Id, fugit sapiente sunt velit harum
          est vitae numquam repellendus officiis quae commodi quod facilis esse
          molestias sequi fugiat sed voluptates nostrum minus cumque omnis?
          Aliquid, vel!
        </p>
        </div>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <button className='addToCart'>
          <ShoppingCartSimple size={22} /> add to cart
        </button>
        <div className="link">
          <div className="item">
            <Heart /> <span>Add to wish list</span>
          </div>
          <div className="item">
            <Scales /> <span>Add to compare</span>
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: Jeans</span>
          <span>Tag: Pants, Jacket</span>
        </div>
        <hr />
        <div className="details">
          <span>Description</span>
          <hr />
          <span>Additional information</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
