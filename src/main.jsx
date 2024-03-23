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
import AuthProvider from './Auth/AuthProvide.jsx'
import Support from './Pages/Home/Support.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Users from './Components/Dashboard/AllPages/Users.jsx'


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
      {
        path: '/support',
        element: <Support />
      },
    ]
  },
  {
    path: '/dashboard',
    element: <Sidebard />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/dashboard/route',
        element: <Dashboard />
      },
      {
        path: '/dashboard/user',
        element: <Users />
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
