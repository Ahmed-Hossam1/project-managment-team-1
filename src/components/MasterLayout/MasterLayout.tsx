import React from 'react'
import Dashboard from '../Dashboard/DashboardNavbar'

import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <div>
      <Dashboard />
      <Outlet />
    </div>
  )
}
