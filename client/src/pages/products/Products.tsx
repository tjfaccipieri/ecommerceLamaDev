import React, { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/list/List';
import { useFetch } from '../../hooks/useFetch';
import './Products.scss';
import { useEffect } from 'react';
import Banner from '../../components/banner/Banner';

function Products() {
  const catId = parseInt(useParams().id!);

  const [maxPrice, setMaxPrice] = useState(500);

  const [sort, setSort] = useState('asc');

  const [selectedSubCategory, setSelectedSubCategory] = useState<any[]>([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (event: any) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedSubCategory(
      isChecked
        ? [...selectedSubCategory, value]
        : selectedSubCategory.filter((item) => item !== value)
    );
  };



  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data.map((item: any) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem priceItem">
            <span>
              {new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'brl',
              }).format(0)}
              
            </span>
            <input
              type="range"
              name="range"
              id="range"
              min={0}
              max={500}
              defaultValue={500}
              onMouseUp={(event: any) => setMaxPrice(event.target.value)}
            />
            <span>
              {new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'brl',
              }).format(maxPrice)}
              
            </span>
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
        <Banner />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCat={selectedSubCategory}
        />
      </div>
    </div>
  );
}

export default Products;
