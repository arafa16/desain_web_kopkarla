import React from 'react'
import Header from '../Attribute/Header'
import { SubsidiaresMenu } from './Attribute/Subsidiares/SubsidiaresMenu';

const Subsidiares = () => {
    const title = "SUBSIDIARES";
  return (
    <div>
        <Header menus={SubsidiaresMenu} title={title} />
        <div className='mx-32'>
            <img src={require('../../Assets/Images/AboutUs/KSPS.jpg')} />
        </div>
    </div>
  )
}

export default Subsidiares
