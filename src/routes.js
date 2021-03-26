import React from 'react'
import { Navigate } from 'react-router-dom'

import DashboardLayout from 'layouts/DashboardLayout'
import Login from 'views/auth/Login'
import MainLayout from 'layouts/MainLayout'

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'patient-codes', element: <div>People codes View</div> },
      { path: 'test-types', element: <div>Examination Types View</div> },
      { path: 'users', element: <div>Users View</div> },
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
