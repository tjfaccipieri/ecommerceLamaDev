import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import './FeaturedProducts.scss'

interface FeaturedProps {
  type: string
}

function FeaturedProducts({type}: FeaturedProps) {

  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Long Sleeve Graphic T-shirt',
      isNew:true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Coat',
      isNew:true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Skirt',
      isNew:false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Hat',
      isNew:false,
      oldPrice: 19,
      price: 12,
    },
  ]

  const [products, setProducts] = useState([])

  const url: string = process.env.REACT_APP_API_URL!

  console.log(url)


  return (
    <div className='featuredProducts'>

      <div className="top">
        <h2>{type} products</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque veritatis sit. Ea, omnis soluta in unde inventore earum porro! Itaque, eum obcaecati eligendi id porro, quam, error voluptates officiis blanditiis quidem vero molestias placeat? Cumque aliquam magni voluptas ab.</p>
      </div>
      <div className="bottom">
        {data.map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts