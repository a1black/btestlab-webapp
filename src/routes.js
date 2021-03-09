import React from 'react'
import DashboardLayout from 'layouts/DashboardLayout'
import MainLayout from 'layouts/MainLayout'
import Login from 'views/auth/Login'
import { Navigate } from 'react-router-dom'

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'users', element: <div>Users View</div> },
      { path: 'examtype', element: <div>Examination Types View</div> },
      { path: 'identitycodes', element: <div>People codes View</div> },
      { path: '*', element: <Navigate to='/404' /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'sign-in', element: <Login /> },
      { path: '404', element: <div>404 Error View</div> },
      { path: '500', element: <div>500 Error View</div> },
      { path: '*', element: <Navigate to='404' /> }
    ]
  }
]

export default routes
