import React from 'react'
import List from '../../components/list/List'
import './Products.scss'

function Products() {
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2' value={2} />
            <label htmlFor="2">T-Shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3' value={3} />
            <label htmlFor="3">Pants</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" name="range" id="range" min={0} max={1000} />
            <span>1000</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="asc" value='asc' />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" name="price" id="desc" value='desc' />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" className='catImg' alt="" />
        <List />
      </div>
    </div>
  )
}

export default Products