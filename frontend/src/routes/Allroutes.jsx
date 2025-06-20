import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../compoents/Home'
import CreatePost from '../compoents/CreatePost'
import Allpost from '../compoents/Allpost'
import UserDetails from '../compoents/UserDetails'
import EditPost from '../compoents/EditPost'

function Allroutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/edit/:id' element={<EditPost />} />
    </Routes>
    </>
  )
}

export default Allroutes