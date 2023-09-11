import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <div class="w-[300px] rounded overflow-hidden shadow-lg  my-5 mx-10">
      <Link to='/product/:id'>
        <figure>
          <img className='h-[300px] rounded-t-lg' src="https://preppykitchen.com/wp-content/uploads/2018/04/Funfetti-cake-recipe-new.jpg" alt="" />
        </figure>
      </Link>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2 flex justify-center">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">10000sum</span>
      </div>
    </div>
  )
}