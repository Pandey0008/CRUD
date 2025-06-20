import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { backendUrl } from '../config/fetch'
function UserDetails() {
    const navigate = useNavigate()
    const [users, setUsers] = useState(null)
    const [error, setError] = useState('')
    const fetchUser = async () => {
        const response = await fetch(`${backendUrl}/api/users/`)
        const data = await response.json()
        setUsers(data)
        if(!response.ok){
            setError(data.message)
        }
        else{
            setError('')
        }
    }
    const handleDelete = async(_id) => {
        const response = await fetch(`${backendUrl}/api/users/${_id}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        if(!response.ok){
            setError(data.message)
        }
        else{
            setError('User Deleted Successfully')
            setTimeout(() => {
                setError('')
                fetchUser()
            },1000)
        }
    }
    useEffect(() => {   
        fetchUser()
    }, [])
    // console.log(users);

const handleEdit = (_id) => {
    navigate(`/edit/${_id}`)
}



    
  return (
    <>
    {error && <p className='text-red-500'>{error}</p>}
    {users?.map((user)=>{
        const {_id, name, email, age} = user
        return(
            <div key={_id} className=" border-2 border-white rounded-md p-4" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="text-white text-2xl font-bold">{`Name: ${name}`}</h5>
    <p className="text-white text-2xl font-semibold">{`Email: ${email}`}</p>
    <p className="text-white text-2xl font-semibold">{`Age: ${age}`}</p>
    <div className="flex justify-between">
    <button className="btn btn-primary p-2 rounded-md" onClick={()=>handleEdit(_id)}>Edit</button>
    <button className="btn btn-danger p-2 rounded-md" onClick={()=>handleDelete(_id)}>Delete</button>
    </div>
  </div>
  </div>
        )
    })}
    
    </>
  )
}

export default UserDetails