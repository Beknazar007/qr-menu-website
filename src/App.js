import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer'
import Features from './components/features/Features';
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact';
function App() {
  return (
    <>
      <BrowserRouter>
         <Header/>
         <Hero/>
         <Features/>
         <Testimonial/>
         <Contact/> 
         <Footer/>
      </BrowserRouter>     
    </>
  );
}

export default App;
