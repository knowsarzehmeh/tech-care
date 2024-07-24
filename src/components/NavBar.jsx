import React from 'react'
import Brand from './Brand'
import Menu from './Menu'
import UserProfile from './UserProfile'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-8 bg-white rounded-[70px] shadow-sm mb-8 sticky top-0'>
        <Brand />
        <Menu />
        <UserProfile />
    </div>
  )
}

export default NavBar