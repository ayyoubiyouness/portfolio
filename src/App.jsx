import './app.scss';
import { BrowserRouter as Router, Route, Routes, useLocation  } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Testimonial from './components/testimonial/Testimonial';
import DemoComponent from './components/portfolio/DemoComponent';
import Studies from './components/studies/Studies';
import { useRef, useEffect } from 'react';
import ReactGA from 'react-ga4';
import Test from './components/test/Test';

ReactGA.initialize('G-HCWMSX514D');



const Homepage = () => {
  return (
    <>
        <Sidebar />

      <section id="Homepage">
        <Navbar />


        <Hero />

      </section>
      <section id="Skills"><Parallax type="skills" /></section>
      <section> <Skills /> </section>

      <section id="Education"><Parallax type="services" /></section>
      <section><Services /> </section>
      <section id="Projects">< Parallax type="portfolio" /></section>
      <Portfolio />
      
      <section id="Contact">
        <Contact />
      </section>
    </>
  )
}

const TrackRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
    // Send pageview to GA4
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <TrackRouteChange />
      <div>


        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/demo" element={<DemoComponent />} />
        </Routes>


      </div>
    </Router>
  )

};

export default App;


