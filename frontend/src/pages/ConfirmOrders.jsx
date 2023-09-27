import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ConfirmOrder() {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [orderProduct, setOrderProduct] = useState('')
    const params = useParams()
    const navigate = useNavigate()
    const [customer] = useState(JSON.parse(localStorage.getItem('user') || []))
    const ORDER_PRODUCT = 'http://localhost:1337/api/order-products/id?populate=product'
    const ORDERS = 'http://localhost:1337/api/orders?populate=customer&customer=order_products'

    useEffect(() => {
        axios.get(ORDER_PRODUCT.replace('id', params.productId))
            .then(res => setOrderProduct(res.data.data))
            .catch(err => console.error(err))
    }, [])

    const deleteOrderProduct = () => {
        axios.delete(ORDER_PRODUCT.replace('id', params.productId))
            .then(() => navigate(`/product/${orderProduct.attributes.product.data.id}`))
            .catch(err => console.error(err))
    }



    const createOrder = e => {
        e.preventDefault()

        axios.post(ORDERS, {
            data: {
                customer, address, phone,
                total: orderProduct.attributes.total,
                order_products: orderProduct.id
            }
        })
            .then(() => navigate('/orders'))
            .catch(err => console.log(err))
    }
    
    return (
        <Layout className='min-h-[747px]'>
            <div className="min-h-[8vh] mb-24 flex">
                {orderProduct.attributes && (
                    <div className="flex">
                        <div className="w-[1120px] h-[25.2px] mx-auto rounded-xl mb-24 mt-5">
                            <div className="flex items-center flex-row text-center">
                                <p className="font-semibold leading-6 w-[500px]">Товар</p>
                                <p className="font-semibold leading-6 w-[250px]">Цена</p>
                                <p className="font-semibold leading-6 w-[250px]">Количество</p>
                                <p className="font-semibold leading-6 w-[250px]">Итого</p>
                            </div>
                            <div className="border-b-2">
                                <div className="h-24 flex">
                                    <div className="mt-4">
                                        <div className="flex">
                                            <p className="text-lg ml-10 font-semibold w-[480px]">
                                                {orderProduct.attributes.product.data.attributes.name}
                                            </p>
                                            <p className="text-lg font-semibold w-[250px]">
                                                <span className="has-text-weight-bold">
                                                    &nbsp;
                                                </span>
                                                {orderProduct.attributes.product.data.attributes.price} sum
                                            </p>
                                            <p className="text-lg font-semibold ml-4 w-[190px]">
                                                <span className="has-text-weight-bold">
                                                    &nbsp;
                                                </span>
                                                x{orderProduct.attributes.amount}
                                            </p>
                                            <p className="text-lg font-semibold w-[160px]">
                                                <span className="has-text-weight-bold">
                                                    &nbsp;
                                                </span>
                                                {orderProduct.attributes.total} sum
                                            </p>
                                        </div>
                                        {/* <button
                                            onClick={deleteOrderProduct}
                                            className="button is-warning is-fullwidth">
                                            Back to &nbsp;
                                            <span className='has-text-weight-bold'>
                                                {orderProduct.attributes.product.data.attributes.name}
                                            </span>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[390px] mx-[2px] border-l-2 px-5">
                            <div className="">
                                <div className="text-2xl font-bold text-center my-5">
                                    Shipping Information
                                </div>
                                <form className="w-[360px] mx-auto" onSubmit={createOrder}>
                                    <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        <input
                                            type="text"
                                            id='name'
                                            placeholder='Write your name'
                                            value={name}
                                            onInput={event => setName(event.target.value)}
                                            required
                                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300 focus:border-gray-500' />
                                    </div>
                                    <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        <input
                                            type="text"
                                            id='address'
                                            placeholder='Write your address'
                                            value={address}
                                            onInput={event => setAddress(event.target.value)}
                                            required
                                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300 focus:border-gray-500' />
                                    </div>
                                    <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        <input
                                            type="tel"
                                            id='phone'
                                            placeholder='Write your phone'
                                            value={phone}
                                            onInput={event => setPhone(event.target.value)}
                                            required
                                            className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300 focus:border-gray-500' />
                                    </div>
                                    <button className='w-full h-[44px] text-center my-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' type='submit'>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    )
}


