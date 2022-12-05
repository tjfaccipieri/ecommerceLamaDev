import React from 'react'
import './List.scss'
import Card from '../card/Card';
import { useFetch } from '../../hooks/useFetch';

interface ListProps {
  catId: number;
  maxPrice: number;
  sort: string;
  subCat: any
}

function List({catId, maxPrice, sort, subCat}:ListProps) {

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCat.map((item: any) => `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className='list'>
      {loading? 'carregando dados' : (data.length === 0 ? (<div className='notfound'><img src="/notfound.png" alt="" /></div>) : data.map((item: any, index) => (
        <Card item={item} key={index} />
      )))}
    </div>
  )
}

export default List