import React from 'react'
import Nav from '../Shared/Nav'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return(
  <div className='min-h-screen flex flex-col' >
  <Nav/>
  <div className='w-96 bg-white items-center m-auto rounded-2xl'>
    <Outlet/>
  </div>
  </div>)
}
