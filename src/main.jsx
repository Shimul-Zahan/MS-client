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
import SamplePage from './Components/Dashboard/SamplePage.jsx'
import Support from './Pages/Home/Support.jsx'


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
        element: <SamplePage />
      },
      {
        path: '/dashboard/route',
        element: <SamplePage />
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
