import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import './FeaturedProducts.scss'

interface FeaturedProps {
  type: string
}

function FeaturedProducts({type}: FeaturedProps) {


  async function getProducts() {
    try {
      const lala = await axios.get(import.meta.env.VITE_API_URL+'/products?populate=*', {
        headers: {
          Authorization: import.meta.env.VITE_API_TOKEN
        }
      })
      console.log(lala.data.data)
      setProducts(lala.data.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()

  }, [])



  

  const [products, setProducts] = useState([])

  


  return (
    <div className='featuredProducts'>

      <div className="top">
        <h2>{type} products</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque veritatis sit. Ea, omnis soluta in unde inventore earum porro! Itaque, eum obcaecati eligendi id porro, quam, error voluptates officiis blanditiis quidem vero molestias placeat? Cumque aliquam magni voluptas ab.</p>
      </div>
      <div className="bottom">
        {products.map(item => (
          <Card item={item} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts