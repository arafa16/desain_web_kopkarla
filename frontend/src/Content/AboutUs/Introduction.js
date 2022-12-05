import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MiniSLide from '../Attribute/MiniSLide';
import Header from '../Attribute/Header';
import AboutUs from './Attribute/Introduction/AboutUs';
import ChooseUs from './Attribute/Introduction/ChooseUs';
import CoreValues from './Attribute/Introduction/CoreValues';
import Management from './Attribute/Introduction/Management';
import Milestone from './Attribute/Introduction/Milestone';
import VisionMission from './Attribute/Introduction/VisionMission';
import ViewContent from './Attribute/ViewContent';
import { IntroductionMenu } from './Attribute/Introduction/IntroductionMenus';

const Introduction = () => {
  const [page, setPage] = useState('');
  const title = "ABOUT US";

  return (
    <div>
      <Header menus={IntroductionMenu} title={title} />
      <ViewContent>
        <Routes>
          <Route path='about' element={<AboutUs />} />
          <Route path='vision' element={<VisionMission />} />
          <Route path='core_values' element={<CoreValues />} />
          <Route path='milestone' element={<Milestone />} />
          <Route path='choose_us' element={<ChooseUs />} />
          <Route path='managements' element={<Management />} />
          <Route path='*' element={<AboutUs />} />
        </Routes>
      </ViewContent>
    </div>
    
  )
}

export default Introduction
