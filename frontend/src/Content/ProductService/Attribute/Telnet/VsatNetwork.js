import React from 'react'
import Header from '../../../Attribute/Header';
import { TelnetMenus } from './TelnetMenus';

const VsatNetwork = () => {
    const title="TELECOM NETWORK INSTALLATION & MAINTENANCE SERVICE"

    return (
        <div>
            <Header menus={TelnetMenus} title={title}/>
            <div className='mx-32 text-justify mt-20 leading-10'>
                <div className='mb-10'>
                VSAT is a satellite dish communication system using the orbiting satellite as an intermediary.

                VSAT is mainly used to build private communication networks, in cities, or remote areas that are not covered by other access media.

                VSATs can be installed in buildings, on land, or in movable objects such as vehicles or ships.

                We install VSAT with C-Band or Ku-Band frequency according to your needs with a parabolic antenna diameter of up to 4.5 meters.
                </div>
                <div className='w-full flex justify-center'>
                    <img src={require(`../../../../Assets/Images/TelcomNetwork/vsat.jpg`)} />
                </div>
            </div>
            
        </div>
    )
}

export default VsatNetwork
