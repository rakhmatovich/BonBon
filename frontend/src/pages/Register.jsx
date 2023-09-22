import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


export default function Register() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const navigate = useNavigate()

    const register = (event) => {
        event.preventDefault()

        if (password === password2) {
            axios.post('http://localhost:1337/api/auth/local/register', {
                username,
                email,
                password,
                confirmed: true
            })
            .then(() => navigate('/home'))
            .catch((err) => console.log(err))
        } else {
            alert('Password do not match')
        }
    }

    return (
        <div className='flex items-center justify-center h-[700px] my-auto'>
            <div className="w-full max-w-lg flex items-center justify-center">
                <div className="flex flex-wrap -mx-3 mb-6 items-center justify-center">
                    <div className="px-3 mb-0 flex items-center justify-center">
                        <div className="shadow-xl">
                            <div className="text-xl text-center">Register</div>
                            <form className='form' onSubmit={event => register(event)}>
                                <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    <input
                                        type="text"
                                        id='username'
                                        className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300'
                                        onInput={event => setUsername(event.target.value)}
                                        value={username}
                                        placeholder='Enter username'
                                    />
                                </div>
                                <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    <input
                                        type="email"
                                        id='email'
                                        className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300'
                                        onInput={event => setEmail(event.target.value)}
                                        value={email}
                                        placeholder='Enter email'
                                    />
                                </div>
                                <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    <input
                                        type="password"
                                        id='password'
                                        className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300'
                                        onInput={event => setPassword(event.target.value)}
                                        value={password}
                                        placeholder='Enter password'
                                    />
                                </div>
                                <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    <input
                                        type="password"
                                        id='passwordConfirm'
                                        className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300'
                                        onInput={event => setPassword2(event.target.value)}
                                        value={password2}
                                        placeholder='Confirm password'
                                    />
                                </div>
                                <button
                                    className="w-[250px] h-[44px] ml-1 text-center mt-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                    type='submit'>
                                    Submit
                                </button>
                            </form>
                            <div className="mt-4 h-20 text-center text-slate-400">
                                <p className='mb-3'>Already have an account?</p>
                                <Link to='/login' className='w-[250px] h-[40px] ml-1 text-center mt-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
                                    Move to login page
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
