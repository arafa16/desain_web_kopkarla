import React from 'react';
import Slider from '../Attribute/Slider';
import { Images } from '../Attribute/DataSlider';
import Service from './Attribute/Service';
import { DataService } from './Attribute/Data/DataService';
import Product from './Attribute/Product';
import ProjectPortFolio from './Attribute/ProjectPortfolio';
import News from './Attribute/News';
import Footer from '../../Footer/Footer';

const Home = () => {
  return (
    <div>
      <div className='w-full h-full'>
        <Slider images={Images} />
        <Service DataService={DataService} />
        <Product />
        <ProjectPortFolio />
        <News />
      </div>
    </div>
    
  )
}

export default Home
