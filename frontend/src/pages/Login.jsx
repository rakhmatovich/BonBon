import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const signIn = (event) => {
        event.preventDefault()

        axios.post('http://localhost:1337/api/auth/local',
            { identifier: username, password }
        )
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                localStorage.setItem('token', JSON.stringify(res.data.jwt))
                navigate('/home')
            })

            .catch(err => console.error((err)))
    }

    return (
        <div className='flex items-center justify-center h-[700px] my-auto'>
            <div className="w-full max-w-lg flex items-center justify-center">
                <div className="flex flex-wrap -mx-3 mb-6 items-center justify-center">
                    <div className="px-3 mb-0 flex items-center justify-center">
                        <div className="shadow-xl">
                            <div className="text-xl text-center">Login</div>
                            <form className='form' onSubmit={(e) => signIn(e)}>
                                <label htmlFor="name" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Enter username</label>
                                <input
                                    type="text"
                                    className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300'
                                    onInput={event => setUsername(event.target.value)}
                                    value={username}
                                    id='name' />
                                <label htmlFor="password" className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Enter password</label>
                                <input
                                    type="password"
                                    className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight transition-all ease-in-out duration-300 hover:bg-slate-300 focus:outline-none focus:bg-slate-300'
                                    onInput={event => setPassword(event.target.value)}
                                    value={password}
                                    id='password' />
                                <button
                                    className="w-[250px] h-[44px] text-center mt-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                    type='submit'>
                                    Submit
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
