import React from 'react'
import WebsiteSettings from './websiteSetting/WebsiteSettings'
import { Outlet } from 'react-router-dom'

const website = () => {
  return (
    <div>
        <WebsiteSettings />
        <Outlet />
    </div>
  )
}

export default website