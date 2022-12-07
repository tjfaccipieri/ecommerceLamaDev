import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import './Banner.scss'

function Banner() {

  const catId = useParams().id

  const { data, loading, error }: any = useFetch(
    `/categories/${catId}?populate=*`
  );

  console.log(data)
  
  return (
    <div className='banner'><img
    src={data?.attributes?.img?.data?.attributes?.url}
    className="catImg"
    alt=""
  /></div>
  )
}

export default Banner