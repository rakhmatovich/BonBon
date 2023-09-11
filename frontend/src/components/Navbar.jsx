import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <section>
      {/* navbar */}
      <div className='p-1 pl-10 bg-lactic h-14 flex items-center'>
        <Link to='/' className='font-light text-3xl text-white'>BonBon</Link>
        <motion.div className='ml-[400px]'
          animate={{ scale: [0, 0, 1, 1] }}
          transition={{ times: [0, 0.1, 0.9, 1] }}>
          <Link to='/' className='text-center cursor-pointer h-12 mt-5 text-lg font-mono text-white transition ease-out hover:text-orange-300'>Главная</Link>
          <Link to='/menu' className='text-center cursor-pointer h-12 mt-5 ml-10 text-xl font-mono text-white transition ease-out hover:text-orange-300'>Меню</Link>
          <Link to='/booking' className='text-center cursor-pointer h-12 mt-5 ml-10 text-xl font-mono text-white transition ease-out hover:text-orange-300'>Бронирование</Link>
          <Link to='/delivery' className='text-center cursor-pointer h-12 mt-5 ml-10 text-xl font-mono text-white transition ease-out hover:text-orange-300'>Доставка</Link>
        </motion.div>
      </div>
    </section>
  )
}
