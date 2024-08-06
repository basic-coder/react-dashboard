import {  createBrowserRouter, Outlet, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Users from './pages/users/Users'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Menu from './components/menu/Menu'
import Login from './pages/login/Login'
import { useState } from 'react'

function App() {
  const Layout = () => {

    const [open, setOpen] = useState(false)

    return (
    <div className='main'>
      <Navbar setOpen={setOpen} open={open}/>
      <div className="container">
        <div className={`menu-container ${open ? 'open-menu' : ''}`}>
          <Menu setOpen={setOpen} />
        </div>
      <div className="content-container">
      <Outlet />
      </div>
      </div>

      <Footer />
    </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { path: "/", element: <Home /> },
        { path: '/products', element: < Products /> },
        { path: '/users', element: < Users /> }
      ],
    },
    {
      path : "/login" ,element: <Login />
    }
   
  ])

  return <RouterProvider router={router} />
}

export default App
