import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Error from './components/Error.jsx'
import Contact from './components/Contact.jsx'
import Body from './components/Body.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'

const appRouter = createBrowserRouter([
  {
    path : "/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element:<Body/>,
      },
      {
        path: "/about",
        element:<About/>,
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu/>
      }
    ],
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={appRouter}/> 
  </React.StrictMode>,
)
