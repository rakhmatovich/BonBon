import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      axios.get("http://localhost:1337/api/products?populate=category&populate=brand&populate=image")
        .then(res => setProduct(res.data.data[id - 1]), setLoading(false))
        .catch(err => console.log(err), setLoading(false))
    }, 1000)
  }, [])

  // console.log(product?.attributes.image?.data?.attributes.url)
  // console.log(product)

  return (
    <Layout>
      <div className='flex w-[90%] mx-auto m-8'>
        <div className='w-1/2 h-[500px] m-2'>
          {!loading && (
            <img src={`http://localhost:1337${product?.attributes.image?.data?.attributes.url}`} className={`w-[100%] h-full rounded-md object-cover`} />
          )}
          {loading && <div>Loading...</div>}
        </div>
        <div className='w-1/2 h-[500px] bg-slate-100 m-2'>
          <div className='m-2 rounded-md'>
            <h1 className='text-3xl text-center my-10'>{product?.attributes.name}</h1>
            <p className='mx-2 text-lg text-center'>{product?.attributes.description}</p>
            {/* <input className='w-60 h-8  border-2 border-slate-500 bg-slate-100 m-2 rounded-md duration-300 focus:outline-none hover:bg-slate-500' type="text" /> */}
          </div>
        </div>
      </div>
    </Layout>
  )
}
