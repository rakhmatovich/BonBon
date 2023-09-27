import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout'

export default function Hall() {
    return (
        <Layout className='min-h-[747px]'>
            <div className='flex'>
                <div className='flex justify-center w-[860px] h-[500px]'>
                    <div className={`w-[805px] h-full bg-[url('/picture.jpg')] bg-center bg-cover`}></div>
                </div>
                <div className='w-2/4 my-6 flex items-center justify-center'>
                    <form className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-2/4 px-3 mb-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                    Hall
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                        <option>First Hall</option>
                                        <option>Second Hall</option>
                                        <option>Third Hall</option>
                                        <option>Fourth Hall</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/4 px-3 mb-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Date From
                                </label>
                                <input className="h-[45.6px] appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300 focus:border-gray-500"  required  id="grid-password" type="date" placeholder="enter date" />
                            </div>
                            <div className="w-full md:w-2/4 px-3 mb-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                    Time
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300 focus:border-gray-500" required  id="grid-city" type="text" placeholder="Enter Time" />
                            </div>
                            <Link to='/hall' className="w-[244px] ml-3 mb-6 h-[45.6px] text-center mt-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded">
                                Book
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

