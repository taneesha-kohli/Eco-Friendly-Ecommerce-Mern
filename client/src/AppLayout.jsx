  import React from 'react'
import MainHeader from './Layouts/components/MainHeader'
import MainFooter from './Layouts/components/MainFooter'
import { Outlet } from 'react-router-dom'
  
  const AppLayout = () => {
    return (
      <>
        <MainHeader/>
        <Outlet/>
        <MainFooter/>
      </>
    )
  }
  
  export default AppLayout
  