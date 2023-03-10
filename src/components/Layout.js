import React from 'react';
import {Outlet } from 'react-router-dom';
import {Nav, Footer, QuickNavs, SideBar} from './shared';



const Layout = () => {
  return (
    <div className="flex justify-around">
    	<Nav />
    	<div className="flex justify-around mt-[3rem] p-6">
        <SideBar />
        <div className=' md:w-[63%] md:min-w-[63%] md:ml-[12%]  p-4 pt-8 '>
    		<div className='min-h-[100vh]'>
        <Outlet /></div><Footer />
          </div>
         <QuickNavs />
       
    	</div>
    	
    	
    </div>
    )
}
export default Layout ;