import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import Layout from '../Components/Layout'

export default function Cart() {

    const navigate = useNavigate()
    const ORDER_PRODUCTS = 'http://localhost:1337/api/order-products'
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

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
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
        <Layout>
            <div className=''>
                <div className="">
                    {!cart || cart.length === 0 ? (
                        <h1 className="text-2xl text-center text-gray-600">Nothing added yet</h1>)
                        : (cart.map(cartItem => (
                            <div className='shadow-md'>
                                <div className="h-12 flex items-center m-5">
                                    <div
                                        className="w-6">
                                        <img
                                            alt="Placeholder image"
                                            src={`http://localhost:1337${cartItem.product.attributes.image.data[0].attributes.url}`}
                                        />
                                    </div>
                                    <div className="w-12">
                                        <Link className=' text-xl' to={`/${cartItem.product.id}`}>
                                            {cartItem.product.attributes.name}
                                        </Link>
                                    </div>
                                    <div className="w-12 flex items-center">
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
                                    <div className="">
                                        <button
                                            className='text-center rounded-md caret-green-600 w-[60px] h-[60px]'
                                            onClick={() => createOrderProducts(cartItem)}>
                                            Buy
                                        </button>

                                        <button
                                            className='text-center rounded-md caret-red-600 w-[60px] h-[60px]'
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
