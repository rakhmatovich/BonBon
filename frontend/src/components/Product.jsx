import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiShoppingCart } from 'react-icons/fi'

export default function Product({ name, price, thumb, id, description, product, cart, setCart, addProduct }) {


  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-w-[350px] max-h-[440px] rounded overflow-hidden relative shadow-lg  my-5 mr-8 ml-4">
      <div className='w-[100%] h-[300px]'>
        <Link to={`/product/${id}`}>
          <figure className='z-0 overflow-hidden'>
            <img
              className='w-[100%] object-center object-cover'
              onClick={() => addProduct(cart, setCart, product, 1)}
              src={`http://localhost:1337${thumb}`}
              alt={name}
              style={{ height: '300px' }}
            />
          </figure>
        </Link>
        <div
          onClick={() => addProduct(cart, setCart, product, 1) }
          className='flex items-center justify-center absolute right-5 top-56 z-50 rounded-full text-center w-16 h-16 bg-lactic'>
          <FiShoppingCart className='w-8 h-8 scale-105 duration-300 hover:scale-125' />
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price}sum</span>
      </div>
    </motion.div>
  )
}