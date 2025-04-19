import './App.css';
import Nav from './components/Nav';
import Autoscroller from './components/Autoscroller';
import Construction from './components/constructions';
import OurServices from './components/ourServices';
import Storey from './components/StoreySection';
import SingleDouble from './components/SingleDouble';
import React from 'react';
import LearnBtn from './components/LearnBtn';
import Testimonial from './components/Testimonial';
import Visit from './components/visit';
import Footer from './components/footer';
import BannerSlider from './components/BannerSlider';
import OwlCarousel from 'react-owl-carousel'; 
import 'owl.carousel/dist/assets/owl.carousel.css'; 
import 'owl.carousel/dist/assets/owl.theme.default.css'; 


function App() {
  return (
    <div className="App">

      <Nav />
      <BannerSlider />
      <Autoscroller />
      <Construction />
      <LearnBtn link="#" text ="Learn More" />
      <OurServices />
      <LearnBtn link="#" text ="All Services"/>
      <Storey />
      <SingleDouble />
      <Testimonial/>
      <Visit/>
      <Footer/>
    </div>
  );
}

export default App;
