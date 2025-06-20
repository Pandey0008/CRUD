import { document } from 'postcss';
import React from 'react'
import Nav from './Nav';
import Allpost from './Allpost';
import { Outlet } from 'react-router-dom';
function Home() {
    document.title = "Home || CRUD || Project";
  return (
    <>
   <Allpost />
    
    
    </>
  )
}

export default Home