import React from 'react'
import Header from '../../../Attribute/Header';
import { TelnetMenus } from './TelnetMenus';

const WirelessNetwork = () => {
    const title="TELECOM NETWORK INSTALLATION & MAINTENANCE SERVICE"
    return (
        <div>
            <Header menus={TelnetMenus} title={title}/>
            <div className='mx-32 text-justify mt-20 leading-10'>
                <div className='mb-10'>
                Kopkarla provides a wide range of wireless service installations such as Broadband Wireless Access (BWA), Radio Link (R/L), Hot Spot, etc.

                Wireless installation and construction are performed up to 100M above the ground. It requires years of experiences and special skills. Our people are certified Working at Height.
                </div>
                <div className='w-full flex justify-center'>
                    <img src={require(`../../../../Assets/Images/TelcomNetwork/vsat.jpg`)} />
                </div>
            </div>
        </div>
    )
}

export default WirelessNetwork
