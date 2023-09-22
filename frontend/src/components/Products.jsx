import React, { useEffect, useState } from 'react'
import axios from "axios";
import Product from './Product'


const PRODUCTS = 'http://localhost:1337/api/products?populate=category&populate=brand&populate=image'

export default function Products() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])


  const isAuth = localStorage.getItem('token') && localStorage.getItem('user')

  useEffect(() => {
    load()
  }, [])
  const load = () => {
    axios.get(PRODUCTS)
      .then((res) => setProducts(res.data.data))
      .catch(err => console.log(err))
  }

  return (
    <div className='grid grid-cols-4'>
      {products && products.map(product => (
        <div className="w-1/4" key={product.id}>
          <Product
            name={product.attributes.name}
            price={product.attributes.price}
            product={product}
            thumb={product.attributes?.image?.data?.attributes?.url}
            id={product.id}
          />
        </div>
      ))}
    </div>
  )
}
