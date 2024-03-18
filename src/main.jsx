import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './Pages/Home/Home.jsx'
import Error from './Utils/Error.jsx'
import Extra from './Utils/Extra.jsx'
import Login from './Components/AuthForm/Login.jsx'
import Registration from './Components/AuthForm/Registration.jsx'
import OTPs from './Components/AuthForm/OTPs.jsx'
import Sidebard from './Components/Dashboard/Sidebard.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/extra/:pageName',
        element: <Extra />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/otps',
        element: <OTPs />
      },
      {
        path: '/registration',
        element: <Registration />
      },
    ]
  },
  {
    path: '/dashboard',
    element: <Sidebard />,
    children: [
      {
        path: '/dashboard',
        element: <h1>Hello Dashboard</h1>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
