import React from 'react';
import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <motion.footer 
        className="bg-lactic py-[70px]">
            <div className="max-w-[1170px] m-auto">
                <div className="flex ">
                    <div className="w-3/12 px-[15px]">
                        <h4 className='text-lg text-white capitalize mb-9 font-medium relative before: absolute bottom-[-10px] text-yallow h-0.5 box-border w-12'></h4>
                        <ul className='list-none text-base capitalize text-white font-light text-cute block transition-all ease-in-out duration-300 hover: pl-2'>
                            <li className='text-base capitalize'><a className='text-base capitalize' href="#">about us</a></li>
                            <li className='text-base capitalize'><a className='text-base capitalize' href="#">our services</a></li>
                            <li className='text-base capitalize'><a className='text-base capitalize' href="#">privacy policy</a></li>
                            <li className='text-base capitalize'><a className='text-base capitalize' href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="w-3/12 px-4">
                        <h4 className='text-lg text-white capitalize mb-9 font-medium relative before: absolute bottom-[-10px] text-yallow h-0.5 box-border w-12'></h4>
                        <ul className='list-none text-base capitalize text-white font-light text-cute block transition-all ease-in-out duration-300 hover: pl-2'>
                            <li className='text-base capitalize'><a className='text-base capitalize' href="#">FAQ</a></li>
                            <li className='text-base capitalize'><a className='text-base capitalize' href="#">shipping</a></li>
                            <li className='text-base capitalize'><a className='text-base capitalize' href="#">returns</a></li>
                            <li className='text-base capitalize'><a className='text-base capitalize' href="#">order status</a></li>
                            <li className='text-base capitalize'><a className='text-base capitalize' href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div className="w-3/12 px-4">
                        <h4 className='text-lg text-white capitalize mb-9 font-medium relative before: absolute bottom-[-10px] text-yallow h-0.5 box-border w-12'></h4>
                        <ul className='list-none text-base capitalize text-white font-light text-cute block transition-all ease-in-out duration-300 hover: pl-2'>
                            <li className='text-base capitalize'><a className='text-base capitalize' href="#">watch</a></li>
                            <li className='text-base capitalize'><a className='text-base capitalize' href="#">bag</a></li>
                            <li className='text-base capitalize'><a className='text-base capitalize' href="#">shoes</a></li>
                            <li className='text-base capitalize'><a className='text-base capitalize' href="#">dress</a></li>
                        </ul>
                    </div>
                    <div className='w-3/12 px-4'>
                        <h4 className='text-lg text-white capitalize mb-9 font-medium relative before: absolute bottom-[-10px] text-yallow h-0.5 box-border'>follow us</h4>
                        <div className="social-links text-base capitalize text-white font-light text-cute block transition-all ease-in-out duration-300 hover: pl-2">
                            <li className='text-base capitalize'><a className='text-base capitalize inline-block h-10 w-10 bg-whity mt-2.5 text-center leading-10 rounded-full	text-white transition-all ease-in-out duration-300 hover: text-blackk bg-slate-50' href="#">tg</a></li>
                            <li className='text-base capitalize'><a className='text-base capitalize inline-block h-10 w-10 bg-whity mt-2.5 text-center leading-10 rounded-full	text-white transition-all ease-in-out duration-300 hover: text-blackk bg-slate-50' href="#">in</a></li>
                            <li className='text-base capitalize'><a className='text-base capitalize inline-block h-10 w-10 bg-whity mt-2.5 text-center leading-10 rounded-full	text-white transition-all ease-in-out duration-300 hover: text-blackk bg-slate-50' href="#">tt</a></li>
                            <li className='text-base capitalize'><a className='text-base capitalize inline-block h-10 w-10 bg-whity mt-2.5 text-center leading-10 rounded-full	text-white transition-all ease-in-out duration-300 hover: text-blackk bg-slate-50' href="#">x</a></li>
                            <h1>
                                <button className='Button'></button>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}
