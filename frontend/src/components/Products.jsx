import React, { useEffect, useState } from 'react'
import axios from "axios";
import Product from './Product'
import { useParams } from 'react-router-dom';
import { addProduct } from '../AddProduct';

export default function Products({products}) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  const [categories, setCategories] = useState([])
  const params = useParams()

  const isAuth = localStorage.getItem('token') && localStorage.getItem('user')

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className='grid grid-cols-4'>
      {products && products.map(product => (
        <div className="w-1/4" key={product.id}>
          <Product
            name={product.attributes.name}
            price={product.attributes.price}
            product={product}
            category={product.attributes}
            thumb={product.attributes?.image?.data[0].attributes?.url}
            id={product.id}
            addProduct={addProduct}
            cart={cart}
            setCart={setCart}
          />
        </div>
      ))}
    </div>
  )
}
