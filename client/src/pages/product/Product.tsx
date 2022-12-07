import { Heart, Scales, ShoppingBag, ShoppingCartSimple } from 'phosphor-react';
import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './Product.scss';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

function Product() {
  const [selectedImage, setSelectedImage] = useState('img');

  const id = useParams().id;

  const [quantity, setQuantity] = useState(1);

  const { data, loading, error }: any = useFetch(`/products/${id}?populate=*`);

  const dispatch = useDispatch()

  return (
    <div className="product">
      {loading ? (
        'carregando item...'
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img src={ data?.attributes?.img?.data?.attributes?.url} alt="" onClick={() => setSelectedImage('img')} />
          <img src={ data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={() => setSelectedImage('img2')} />
            </div>

            <div className="mainImg">
              <img src={
                  data?.attributes?.[selectedImage]?.data?.attributes?.url} alt="" />
            </div>
          </div>
          <div className="right">
            <div className="top">
              <h1>{data?.attributes?.title}</h1>
              <span className="price">
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(data?.attributes?.price)}
              </span>
              <p className="description">
              {data?.attributes?.description}
              </p>
            </div>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>

            <button className="addToCart" onClick={() => dispatch(addToCart({
              id: data.id,
              title: data.attributes.title,
              description: data.attributes.description,
              price: data.attributes.price,
              img: data.attributes.img.data.attributes.url,
              quantity,
            }))}>
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
        </>
      )}
    </div>
  );
}

export default Product;
