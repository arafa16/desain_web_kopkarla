import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const {menus, title} = props;

  return (
    <div>
      <div className='w-full bg-[#ecf9fa]'>
        <div className='mb-4 bg-gradient-to-r from-[#2c818b] to-[#46c2d1] h-[18rem] rounded-br-[6rem] mr-1 flex justify-between items-center px-32'>
          <div className='text-[3rem] text-white font-bold'>{title}</div>
          <div className='animate-bounce bg-gradient-to-r from-gray-200 to-white p-4 rounded-full shadow-2xl'>
            <img className='w-[5rem] ' src={require('../../Assets/Images/Logo.png')} />
          </div>
        </div>
        <div className='mx-32 py-6'>
          <div className='flex justify-between items-center font-semibold text-[#06545e]'>
            {menus.map((menu, index)=>(
              <Link to={menu.link} className='cursor-pointer hover:text-[#3b96a1]'>{menu.name}</Link>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
