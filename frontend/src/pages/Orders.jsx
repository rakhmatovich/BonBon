import React, { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import axios from "axios";

export default function Orders() {
    const ORDERS = 'http://localhost:1337/api/orders?populate=customer&customer=order_products'
    const [orders, setOrders] = useState([])
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const { username } = JSON.parse(localStorage.getItem('user') || [])

    useEffect(() => {
        axios.get(ORDERS + `&filters[total][username][$eq]=${username}`)
            .then(res => setOrders(res.data.data))
            .catch(err => console.log(err))
    }, [])
    

    // useEffect(() => {
    //     axios.get(ORDERS + `&filters[customer][username][$eq]=${username}` +
    //         '&pagination[pageSize]=10&pagination[withCount]=true')  
    //         .then(res => {
    //             setOrders(res.data.data)
    //             setPage(res.data.meta.pagination.page)
    //             setPageCount(res.data.meta.pagination.pageCount)
    //         })
    //         .catch(err => console.log(err))
    //  }, [])
    

    return (
        <Layout className='min-h-[747px]'>
            <div>
                <div>
                    <div className="text-2xl font-semibold text-center text-gray-700 my-10">My recent orders</div>
                    <div>
                        {orders.length === 0 ? (
                            <div className='text-2xl font-semibold text-center text-gray-700'>You didn't ordered something yet</div>
                        )
                            : (
                                <table className="table-fixed mx-auto w-[800px] my-10">
                                    <thead className='bg-gray-800 text-white'>
                                        <tr className='border-b-2'>
                                            <th className='w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm'>Order</th>
                                            <th className='w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm'>Total</th>
                                            <th className='w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm'>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-center text-gray-700'>
                                        {orders && orders.map(order => (
                                            <tr key={order.id} className="border-b-2">
                                                <td className='w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm transition-all duration-300 ease-in-out hover:text-lactic'>Order № {order.id}</td>
                                                <td className='w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm transition-all duration-300 ease-in-out hover:text-lactic'>{order.attributes.total} sum</td>
                                                <td className='w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm transition-all duration-300 ease-in-out hover:text-lactic'>Pending</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}


