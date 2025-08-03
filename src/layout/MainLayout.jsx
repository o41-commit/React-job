import React from 'react'
import { Outlet, } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../component/Navbar';
import Footer from './footer';

const MainLayout = () => {
  return (
    <>
      <Navbar /> 
      <Outlet />
      <ToastContainer
        position="top-right"/>
      <Footer />
    </>
    
  )
}

export default MainLayout