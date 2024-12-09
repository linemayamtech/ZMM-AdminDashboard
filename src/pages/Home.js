import React from 'react'
import Header from '../components/Header'
import SideNavbar from '../components/SideNavbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
         <Header/>
        <div className='flex w-full h-[100%] '>
            <div className='w-1/6'>
                <SideNavbar/>
            </div>
            <div className='w-5/6'>  
            <Outlet/>
            <Footer/>
            </div>
        </div>
   
    </div>
  )
}

export default Home