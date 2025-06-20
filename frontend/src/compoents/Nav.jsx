import React from 'react'
import { Link } from 'react-router-dom'
import Allroutes from '../routes/Allroutes'
import { useNavigate } from 'react-router-dom'
function Nav() {
  const navigate = useNavigate()
  return (
    <div>
      <nav className=" bg-black text-white flex justify-between items-center p-4">
    <Link to='/' className="font-bold text-2xl">CRUD || Project</Link>
    <Link to='/create-post'  onClick={(e) => {e.preventDefault(); navigate('/create-post')}} className="text-xl font-bold">Create Post</Link> 
</nav>
    </div>
  )
}

export default Nav