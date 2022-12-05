import React from 'react'
import Home from './Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import NavBar from '../SideBar/NavBar';
import Footer from '../Footer/Footer';
import Introduction from './AboutUs/Introduction';
import VisionMission from './AboutUs/Attribute/Introduction/VisionMission';
import Brances from './AboutUs/Brances';
import Subsidiares from './AboutUs/Subsidiares';
import DownloadFile from './AboutUs/DownloadFile';
import NewsEvent from './NewsEvent/NewsEvent';
import ProjectPortofolio from './ProjectPortofolio/ProjectPortofolio';
import Career from './Creer/Career';
import Contact from './Contact/Contact';
import ProductService from './ProductService/ProductService';

const Content = () => {
  return (
    <div className='h-[50rem]'>
      <BrowserRouter>
        <Routes>
          <Route path='/' 
            element={
              <>
              <NavBar />
              <Home />
              <Footer />
              </>
            }>
          </Route>
          <Route path='/introduction/*' element={
              <>
              <NavBar />
              <Introduction />
              <Footer />
              </>
            }/>
          <Route path='/subsidiares' 
            element={
              <>
              <NavBar />
              <Subsidiares />
              <Footer />
              </>
            }/>
          <Route path='/download_file' 
            element={
              <>
              <NavBar />
              <DownloadFile />
              <Footer />
              </>
            }/>
          <Route path='/news' 
            element={
              <>
              <NavBar />
              <NewsEvent />
              <Footer />
              </>
            }/>
          <Route path='/project' 
            element={
              <>
              <NavBar />
              <ProjectPortofolio />
              <Footer />
              </>
            }/>
          <Route path='/career' 
            element={
              <>
              <NavBar />
              <Career />
              <Footer />
              </>
            }/>
          <Route path='/contact' 
            element={
              <>
              <NavBar />
              <Contact />
              <Footer />
              </>
            }/>
          <Route path='/brances' element={
              <>
              <NavBar />
              <Brances />
              <Footer />
              </>
            }/>
          <Route path='/product/*' element={
              <>
              <NavBar />
              <ProductService />
              <Footer />
              </>
            }/>
          <Route path='*'
            element={
              <NotFound />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default Content;
