import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { backendUrl } from '../config/fetch'

function EditPost() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState('')
    const {id} = useParams()

    const fetchUser = async() => {
       
        const response = await fetch(`${backendUrl}/api/users/${id}`)
        const result = await response.json()
        if(!response.ok){
            console.log(result.message);
            setError(result.message)
        }
        else{
            // console.log(result);
            setError('')
            setName(result.name)
            setEmail(result.email)
            setAge(result.age)
        }
        
    }

    useEffect(() => {
        fetchUser()
    }, [])


    const handleSubmit = async(e) => {
        e.preventDefault()
        const data = {name, email, age}
        const response = await fetch(`${backendUrl}/api/users/${id}`, {
            method: 'PATCH',
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
            setError('User Updated Successfully')
            setTimeout(() => {
                setError('')
                navigate('/')
            }, 1000)
        }
        
    }
  return (
    <>
    {error && <p className='text-red-500'>{error}</p>}
    <div className='bg-black h-full w-full'>
        <form action="" className='flex flex-col items-center justify-center h-screen p-10'>
   <h1 className='text-white text-4xl font-bold mb-6'>Edit Post</h1>
        <input type="text" placeholder='Name' className='w-1/2 p-2 rounded-md mb-4' name='name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="email" placeholder='Email' className='w-1/2 p-2 rounded-md mb-4' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="number" placeholder='Age' className='w-1/2 p-2 rounded-md mb-4' name='age' value={age} onChange={(e)=>setAge(e.target.value)} />
        <button type='submit' className='w-1/2 p-2 rounded-md bg-blue-500 text-white mb-4' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
    </>
  )
}

export default EditPost