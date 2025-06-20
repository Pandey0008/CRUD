import React from 'react'
import { Outlet } from 'react-router-dom'
import UserDetails from './UserDetails'

function Allpost() {
  return (
    <div className='bg-black h-full w-full'>
       <div className='bg-black flex flex-col items-center justify-center h-screen p-10'>
        <h1 className='text-white text-4xl font-bold'>Users</h1>
        <div className='flex flex-wrap items-center justify-center h-screen p-10 gap-4'>
        <UserDetails />
        </div>
    </div>
    </div>
  )
}

export default Allpost