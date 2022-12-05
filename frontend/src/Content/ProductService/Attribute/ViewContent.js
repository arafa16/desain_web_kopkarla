import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cable from './ProductSolution/Cable'
import MobileRadio from './ProductSolution/MobileRadio'
import PowerSystem from './ProductSolution/PowerSystem'
import FiberOptic from './Telnet/FiberOptic'
import VsatNetwork from './Telnet/VsatNetwork'
import WirelessNetwork from './Telnet/WirelessNetwork'

const ViewContent = () => {
  return (
    <div>
      <Routes>
        <Route path='/fiber_optic' element={<FiberOptic />} />
        <Route path='/vsat' element={<VsatNetwork />} />
        <Route path='/wireless' element={<WirelessNetwork />} />
        <Route path='/mobile_radio' element={<MobileRadio />} />
        <Route path='/power_system' element={<PowerSystem />} />
        <Route path='/cable' element={<Cable />} />
      </Routes>
    </div>
  )
}

export default ViewContent
