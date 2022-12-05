import React from 'react'
import Header from '../Attribute/Header'
import { BranceMenus } from './Attribute/Brances/BranceMenus'

const Brances = () => {
  const title = "BRANCES";

  return (
    <div>
      <Header menus={BranceMenus} title={title} />
      <div className='mx-32'>
        <img src={require('../../Assets/Images/AboutUs/branches.jpg')} />
      </div>
    </div>
  )
}

export default Brances
