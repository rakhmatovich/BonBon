import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import Layout from '../Components/Layout'

export default function Cart() {
    const ORDER_PRODUCTS = 'http://localhost:1337/api/order-products'
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const navigate = useNavigate()

    const createOrderProducts = item => {
        axios.post(ORDER_PRODUCTS, {
            data: {
                amount: item.count,
                product: item.product,
                total: item.product.attributes.price * item.count,
            }
        })
            .then(res => navigate(`/order/${res.data.data.id}/${item.count}`))
            .catch(err => console.log(err))
        return removeCartItem(item)
    }

    useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart])

    const removeCartItem = cartItem => {
        return setCart([...cart.filter(item => item.product.id !== cartItem.product.id)])
    }

    const increment = cartItem => {
        setCart(cart.map(item => {
            if (item.product.id === cartItem.product.id) item.count += 1
            return item
        }))
    }

    const decrement = cartItem => {
        if (cartItem.count === 1) {
            return removeCartItem(cartItem)
        }

        setCart(cart.map(item => {
            if (item.product.id === cartItem.product.id) item.count -= 1
            return item
        }))
    }


    return (
        <Layout className='min-h-[747px]'>
            <div className='w-[1500px] mx-[18px] rounded-xl'>
                <div>
                    {!cart || cart.length === 0 ? (
                        <h1 className="text-3xl my-5 font-bold text-center text-gray-600">Nothing added yet</h1>)
                        : (cart.map(cartItem => (
                            <div className='shadow-md'>
                                <div className="h-24 flex items-center m-5 rounded-xl">
                                    <div className="w-24 h-24">
                                        <img
                                            className='w-24 h-24 rounded-xl'
                                            alt="Placeholder image"
                                            src={`http://localhost:1337${cartItem.product.attributes.image.data[0].attributes.url}`}
                                        />
                                    </div>
                                    <div className="mx-4">
                                        <Link className=' text-xl' to={`/${cartItem.product.id}`}>
                                            {cartItem.product.attributes.name}
                                        </Link>
                                    </div>
                                    <div className="w-12 mx-4 flex items-center">
                                        <button
                                            className="rounded-md caret-red-600 w-[60px] h-[60px]"
                                            onClick={() => decrement(cartItem)}>
                                            -
                                        </button>
                                        <span className='text-2xl m-4 w-16'>{cartItem.count}</span>
                                        <button
                                            className="rounded-md caret-green-600 w-[60px] h-[60px]"
                                            onClick={() => increment(cartItem)}>
                                            +
                                        </button>
                                    </div>
                                    <div className="mx-4">
                                        <button
                                            onClick={() => createOrderProducts(cartItem)}
                                            className='text-center mx-4 rounded-md caret-green-600 w-[60px] h-[60px]'>
                                            Buy
                                        </button>

                                        <button
                                            className='text-center rounded-md mx-4 caret-red-600 w-[60px] h-[60px]'
                                            onClick={() => removeCartItem(cartItem)}>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )))}
                </div>
            </div>
        </Layout >
    );
}
