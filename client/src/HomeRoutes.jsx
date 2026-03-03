import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout'
import HomePage from './pages/Frontend/Index'
import Shop from './pages/Frontend/Shop'

const HomeRoutes = () => {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children: [
        {
          path: '/',
          element: <HomePage/>
        },
        {
          path: 'shop',
          element: <Shop/>
        }
      ]
    }
  ])
  

  return (
   <RouterProvider router={routes}/>
  )
}

export default HomeRoutes
