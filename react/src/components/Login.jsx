import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [passWord, setPassWord] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(email, passWord);
        
    }

  return (
    <>
      <div className='min-h-screen bg-gray-200 flex justify-center items-center p-9'>
        <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-lg'>
            <h2 className='text-3xl font-semibold text-center mb-6' >Login</h2>
            <form action="" onSubmit={handleSubmit}>

                {/* <div className='mb-5'>
                    <label className='block text-sm font-medium text-gray-800' htmlFor="username">Usename</label>
                    <input 
                    id='username' 
                    name='username' 
                    type="username" 
                    placeholder='Enter your username' 
                    className='w-full p-3 border border-gray-100 rounded-lg focus:outline-none focus:bg-blue-100'
                    />
                </div> */}

                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-800' htmlFor="email">Email</label>
                    <input 
                    id='email' 
                    type="email" 
                    placeholder='Enter your email'
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    className='w-full p-3 border border-gray-100 rounded-lg focus:outline-none focus:bg-blue-100'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-800' htmlFor="password">Password</label>
                    <input 
                    id='password' 
                    name='password' 
                    type="password" 
                    placeholder='Enter your password'
                    value={passWord}
                    onChange={e=>setPassWord(e.target.value)}
                    className='w-full p-3 border border-gray-100 rounded-lg focus:outline-none focus:bg-blue-100'
                    />
                </div>

                <button className='w-full font-semibold py-3 bg-blue-100 rounded-lg hover:bg-blue-500 focus:bg-blue-700' type='Sumit'>Login</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Login
