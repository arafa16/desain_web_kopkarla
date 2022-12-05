import React from 'react'
import Header from '../../../Attribute/Header'
import { TelnetMenus } from './TelnetMenus'

const FiberOptic = () => {
    const title="TELECOM NETWORK INSTALLATION & MAINTENANCE SERVICE"
    return (
      <div>
        <Header menus={TelnetMenus} title={title}/>
        <div className='mx-32 text-justify mt-20 leading-10'>
          Kopkala Offers a full range of service, from installation, engineering, construction, technical and maintenance services designed to meet aerial and underground fiber optic plant needs.
  
          We have extensive experience in serving various industries for fiber optic installation and maintenance, whether backbone or last mile (links from the backbone to the end user), we are ready to help you.
  
          Our vast experienced, highly skilled engineers are set with the most up-to-date technology and troubleshooting equipment which is a must-have combination in fiber optic installation
  
          Precision is very vital in installing fiber optic, particularly during the splicing, our engineers are equipped with splicers, OTDR, and other latest technology of fiber optic test & diagnostic equipment to ensure accurate installation and timely examination to speed up the time and minimize downtime in case any repairment.
  
          We provide 2 cores (FTTH) to 96 cores fiber optic stock and installation, and special order for bigger fiber optic capacity above 144 cores.
  
          Services Provided :
        </div>
        <div className='w-full flex justify-center'>
          <img src={require(`../../../../Assets/Images/TelcomNetwork/fiber_optic.jpg`)} />
        </div>
      </div>
    )
}

export default FiberOptic
