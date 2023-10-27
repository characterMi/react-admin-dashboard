import { Home, Users, Products, Login, User, Product, Profile } from "./pages"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Navbar, Menu, Footer } from "./components";
import "./styles/global.scss";
import { useEffect, useState } from "react";

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
            <img src="/public/menu.svg" alt="menu" className="menu-toggle" onClick={toggleMenu} />
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
