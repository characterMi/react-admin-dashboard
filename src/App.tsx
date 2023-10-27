import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import "./styles/global.scss";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import User from "./pages/User/User";
import Product from "./pages/Product/Product";
import Login from "./pages/Login/Login";
import menu from "../public/menu.svg"

function App() {
  const [open, setOpen] = useState(false)
  const [isMenuActive, setIsMenuActive] = useState(true)
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  }
  useEffect(() => {
    isMenuActive && document.querySelector('.menu-container')?.classList.add('active')
    !isMenuActive && document.querySelector('.menu-container')?.classList.remove('active')
  }, [isMenuActive])

  const Layout = () => {
    return (
      <main className="main">
        <Navbar />
        <div className="container">
          <div className='menu-container'>
            <Menu />
            <img src={menu} alt="menu" className="menu-toggle" onClick={toggleMenu} />
          </div>
          <div className="content-container">
            <Outlet />
          </div>
        </div>
        <Footer />
      </main>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/users",
          element: <Users open={open} setOpen={setOpen} />
        },
        {
          path: "/products",
          element: <Products open={open} setOpen={setOpen} />
        },
        {
          path: "/users/:id",
          element: <User />
        },
        {
          path: "/products/:id",
          element: <Product />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
