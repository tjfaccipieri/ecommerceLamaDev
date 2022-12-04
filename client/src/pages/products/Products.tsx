import React, { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/list/List';
import { useFetch } from '../../hooks/useFetch';
import './Products.scss';

function Products() {
  const catId = parseInt(useParams().id!);

  const [maxPrice, setMaxPrice] = useState(1000);

  const [sort, setSort] = useState('');

  const [selectedSubCategory, setSelectedSubCategory] = useState<any[]>([])

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (event: any) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedSubCategory(isChecked
      ? [...selectedSubCategory, value]
      : selectedSubCategory.filter((item) => item !== value))
  }

  console.log(selectedSubCategory)

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data.map((item: any) => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              name="range"
              id="range"
              min={0}
              max={1000}
              onChange={(event: any) => setMaxPrice(event.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={() => setSort('asc')}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={() => setSort('desc')}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="catImg"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCat={selectedSubCategory} />
      </div>
    </div>
  );
}

export default Products;
