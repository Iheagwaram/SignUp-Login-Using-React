import React, { useState } from 'react'

const Register = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState ('')
    const [passWord, setPassWord] = useState ('')

    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(userName, email, passWord)

    }

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center p-4'>
      <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-lg'>

        <h2 className='text-3xl font-semibold text-center mb-6'>Sign Up</h2>

        <form action="" onSubmit={handleSubmit}>

            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700' htmlFor="username">Username</label>
                <input 
                id='username' 
                name='username' 
                type="text"  
                placeholder='Enter your username'
                value={userName}
                onChange={(e)=> setUserName(e.target.value)}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>

            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700' htmlFor="email">Email adress</label>
                <input 
                id='email' 
                name='email' 
                type="email"  
                placeholder='Enter your email adress'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>

            <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700' htmlFor="password">Password</label>
                <input 
                id='password' 
                name='password' 
                type="password" 
                placeholder='Enter your password' 
                value={passWord}
                onChange={(e)=> setPassWord(e.target.value)}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>

            <button className='w-full py-3 bg-blue-300 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500' type='submit'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
