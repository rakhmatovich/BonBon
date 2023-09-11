import React from 'react'
import Layout from '../Components/Layout'
import Products from '../Components/Products'

export default function Menu() {
    return (
        <Layout>
            <div className='flex'>
                {/* <div class="relative">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-10">
                        Dropdown
                    </button>
                    <ul class="absolute bg-white text-gray-700 pt-1">
                        <li><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 1</a></li>
                        <li><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 2</a></li>
                        <li><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 3</a></li>
                    </ul>
                </div> */}
                {/* <div className="navbar-item">
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="rounded-xl py-2 px-3 focus:outline-none"
                                type="search"
                                placeholder="Find a product" />
                        </div>
                    </div>
                </div> */}
            </div>
            <Products className='z-0' />
        </Layout>
    )
}
