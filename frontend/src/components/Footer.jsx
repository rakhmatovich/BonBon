import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <motion.footer
            className="bg-lactic py-[70px]">
            <div className="max-w-[1170px] m-auto">
                <div className="flex ">
                    <div className="w-3/12 px-[15px]">
                        <div className='capitalize font-light text-white transition-all ease-in-out duration-300 hover: pl-2'>
                            <Link to='/'>about us</Link>
                            <br />
                            <Link to='/'>our services</Link>
                            <br />
                            <Link to='/'>privacy policy</Link>
                            <br />
                            <Link to='/'>affiliate program</Link>
                            <br />
                        </div>
                    </div>
                    <div className="w-3/12 px-4">
                        <div className='capitalize transition-all font-light text-white ease-in-out duration-300 hover: pl-2'>
                            <Link to='/'>FAQ</Link>
                            <br />
                            <Link to='/'>shipping</Link>
                            <br />
                            <Link to='/'>returns</Link>
                            <br />
                            <Link to='/'>order status</Link>
                            <br />
                            <Link to='/'>payment options</Link>
                            <br />
                        </div>
                    </div>
                    <div className="w-3/12 px-4">
                        <ul className='capitalize text-lg text-white font-light transition-all ease-in-out duration-300 hover: pl-2'>
                            <Link to='/'>watch</Link>
                            <br />
                            <Link to='/'>bag</Link>
                            <br />
                            <Link to='/'>shoes</Link>
                            <br />
                            <Link to='/'>dress</Link>
                            <br />
                        </ul>
                    </div>
                    <div className='w-3/12 px-4'>
                        <h4 className='text-lg text-white capitalize mb-9 font-medium relative'>follow us</h4>
                        <div className="text-cute transition-all ease-in-out duration-300 hover: pl-2 capitalize">
                            <a className='inline-block h-10 w-10 bg-whity mt-2.5 text-center leading-10 rounded-full	text-white transition-all ease-in-out duration-300 hover:text-blackk bg-slate-50' href="https://web.telegram.org/a/#-1432831867">tg</a>
                            <br />
                            <a className='inline-block h-10 w-10 bg-whity mt-2.5 text-center leading-10 rounded-full	text-white transition-all ease-in-out duration-300 hover:text-blackk bg-slate-50' href="#">in</a>
                            <br />
                            <a className='inline-block h-10 w-10 bg-whity mt-2.5 text-center leading-10 rounded-full	text-white transition-all ease-in-out duration-300 hover:text-blackk bg-slate-50' href="#">tt</a>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    )
}
