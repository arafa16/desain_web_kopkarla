import React from 'react';
import Logo from './Component/Logo';
import Menu from './Component/Menu';

const NavBar = () => {
  return (
    <div className='relative mb-16'>
      <div className='fixed top-0 z-[4] bg-white  w-full flex justify-between mx-auto px-10 shadow-xl'>
        <Logo />
        <Menu />
      </div>
    </div>
    
  )
}

export default NavBar;
