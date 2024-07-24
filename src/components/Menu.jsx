import React from 'react'
import MenuItem from './MenuItem'


const menu = [
    {
        path :'#',
        iconSource : '/assets/home.svg',
        itemName : 'Overview',
        isActive: false,
        width: 15,
    },
    {
        path :'#',
        iconSource : '/assets/user-group.svg',
        itemName : 'Patients',
        isActive: true,
        width: 23,
    },
    {
        path :'#',
        iconSource : '/assets/calendar-today.svg',
        itemName : 'Schedule',
        isActive: false,
        width: 15,
    },
    {
        path :'#',
        iconSource : '/assets/chat-bubble.svg',
        itemName : 'Message',
        isActive: false,
        width: 18,
    },
    {
        path :'#',
        iconSource : '/assets/credit-card.svg',
        itemName : 'Transactions',
        isActive: false,
        width: 21,
    },
]

const Menu = () => {
  return (
    <ul className='flex items-center gap-2'>
        {
            menu.map((menuItem, idx) => <MenuItem key={idx} {...menuItem} /> )
        }
    </ul>
  )
}

export default Menu