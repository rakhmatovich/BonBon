import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

export default function Navbar() {
  return (
    <section>
      {/* navbar */}
      <div className='p-1 pl-10 bg-lactic h-14 flex items-center'>
        <Link to='/' className='font-light text-3xl text-white'>BonBon</Link>
        <motion.div className='ml-[400px]'
          animate={{ scale: [0, 0, 1, 1] }}
          transition={{ times: [0, 0.1, 0.9, 1] }}>
          <Link to='/home' className='text-center cursor-pointer h-12 mt-5 text-lg font-mono text-white transition ease-out hover:text-orange-300'>Главная</Link>
          <Link to='/menu' className='text-center cursor-pointer h-12 mt-5 ml-10 text-xl font-mono text-white transition ease-out hover:text-orange-300'>Меню</Link>
          <Link to='/booking' className='text-center cursor-pointer h-12 mt-5 ml-10 text-xl font-mono text-white transition ease-out hover:text-orange-300'>Бронирование</Link>
          <Link to='/delivery' className='text-center cursor-pointer h-12 mt-5 ml-10 text-xl font-mono text-white transition ease-out hover:text-orange-300'>Доставка</Link>
        </motion.div>
        <Link to='/cart' className='flex items-center justify-center absolute right-5 z-50 rounded-full text-center w-14 h-14 bg-lactic'>
          <FiShoppingCart className='w-8 h-8 scale-105 duration-300 hover:scale-125' />
        </Link>
      </div>
    </section>
  )
}
