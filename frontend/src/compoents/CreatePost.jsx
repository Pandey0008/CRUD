import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { backendUrl } from '../config/fetch'

function CreatePost() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault()
        const data = {name, email, age}
        const response = await fetch(`${backendUrl}/api/users/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await response.json()
        if(!response.ok){
            console.log(result.message);
            setError(result.message)
        }
        else{
            // console.log(result);
            setError('')
            setName('')
            setEmail('')
            setAge('')
            navigate('/')
        }
    }


    // console.log(name, email, age)
  return (
   <>
   <div className='bg-black h-full w-full'>
   {error && <p className='text-red-500'>{error}</p>}
   <form action="" className='flex flex-col items-center justify-center h-screen p-10'>
   <h1 className='text-white text-4xl font-bold mb-6'>Create Post</h1>
        <input type="text" placeholder='Name' className='w-1/2 p-2 rounded-md mb-4' name='name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="email" placeholder='Email' className='w-1/2 p-2 rounded-md mb-4' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="number" placeholder='Age' className='w-1/2 p-2 rounded-md mb-4' name='age' value={age} onChange={(e)=>setAge(e.target.value)} />
        <button type='submit' className='w-1/2 p-2 rounded-md bg-blue-500 text-white mb-4' onClick={handleSubmit}>Submit</button>
      </form>
      </div>
   </>
  )
}

export default CreatePost