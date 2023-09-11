import React from 'react'
import Product from './Product'

export default function Products() {
  return (
    <div className='grid grid-cols-4'>
      <Product
        category='laptop'
        name='MacBook Pro M1 Pro'
        description='lorem ipsum dolor sit amet!'
        brand='Apple'
        price='1000'
      />
      <Product
        category='laptop'
        name='MacBook Pro M1 Pro'
        description='lorem ipsum dolor sit amet!'
        brand='Apple'
        price='1000'
      />
      <Product
        category='laptop'
        name='MacBook Pro M1 Pro'
        description='lorem ipsum dolor sit amet!'
        brand='Apple'
        price='1000'
      />
      <Product
        category='laptop'
        name='MacBook Pro M1 Pro'
        description='lorem ipsum dolor sit amet!'
        brand='Apple'
        price='1000'
      />
    </div>
  )
}
