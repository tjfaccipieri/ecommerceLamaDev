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
    `/products?populate=*&[filters][categories][id]=${catId}${subCat.map((item: any) => `&[filters][sub_categories][id][$eq]=${item}`)}`
  );

  return (
    <div className='list'>
      {loading? 'carregando dados' : (data.length === 0 ? 'Nenhum produto encontrado' : data.map((item: any) => (
        <Card item={item} key={item.attributes.id} />
      )))}
    </div>
  )
}

export default List