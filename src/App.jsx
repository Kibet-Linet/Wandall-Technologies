import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'
import InternetPlans from './components/InternetPlans' 
import CyberSecurity from './components/CyberSecurity'
import Home from './components/Home'
import WhyUs from './components/WhyUs'
import GreenPower from "./components/GreenPower";
import NavBar from "./components/NavBar";


function App() {
    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internet-plans" element={<InternetPlans />} />
        <Route path="/green-power" element={<GreenPower />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/why-us" element={<WhyUs />} />
      </Routes>
    </>
  )
}

export default App
