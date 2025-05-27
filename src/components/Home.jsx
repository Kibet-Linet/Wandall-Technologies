import React, { useEffect } from 'react';
import '../css/home.css';
import construction from '../assets/construction-img.jpg';
import wifi from '../assets/wifi-icon-people.jpg';
import greenpower from '../assets/green-power-icon.jpg';
import cybersecurity from '../assets/cybersecurity-icon.jpg';
import powergrid from '../assets/power-grid.jpg';
import starlink from '../assets/starlink.jpg';
import battery from "../assets/battery.jpg";

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll('.section');
    hiddenElements.forEach(el => observer.observe(el));
  }, []);

  return (
    <>
      <section className="intro section">
        <div className='intro-text'>
          <h3>BUILDING CONNECTIONS FOR A BRIGHTER FUTURE</h3>
          <h1>CONNECT,<br />INNOVATE, GROW</h1>
          <p>Our dedication to future-proofing businesses through Intelligent Connectivity enables building connections that enhance a technological future.</p>
          <p className='p'>Develop With Wandall Technologies LTD</p>
        </div>
        <div className='construction-image'>
          <img src={construction} alt="construction" />
        </div>
      </section>

      <section className='three-cubes-container section'>
        {[
          {
            img: wifi,
            title: 'Home/Business Internet Plans',
            text: 'Providing Affordable High-speed wifi solutions for your households or businesses.'
          },
          {
            img: cybersecurity,
            title: 'Cybersecurity',
            text: 'Unified platform combining CCTV, biometric data, and security measures.'
          },
          {
            img: greenpower,
            title: 'Green-Power solutions',
            text: 'Solar and generator solutions for homes and businesses.'
          }
        ].map((item, idx) => (
          <div className='three-cubes' key={idx}>
            <img src={item.img} alt={item.title} className="logo" />
            <h1>{item.title}</h1>
            <p>{item.text}</p>
            <p className='p'>Learn more</p>
          </div>
        ))}
      </section>

      <section className='bandwidth section'>
        <div>
          <p>Bandwidth</p>
          <h1>Get Dedicated Internet Access(DIA) today from as low as Kshs 250 Only</h1>
          <p>Scaling with Wandall Technologies Dedicated Capacity Solutions and Partnerships</p>
          <p className='p'>Call Us Today</p>
        </div>
        <div className='construction-image'>
          <img src={powergrid} alt="construction" />
        </div>
      </section>

      <section className='starlink section'>
        <div>
          <h1>Meet the Starlink Gen2 & Gen3 Devices</h1>
          <p>Advanced satellite device compatible with 3G/4G networks, delivering high-speed broadband via satellite connection.</p>
          <p className='p'>Get the Starlink Kit Now!</p>
        </div>
        <div className='construction-image'>
          <div className="outer-box">
            <div className="inner-box">
              <img src={starlink} alt="Starlink" />
            </div>
          </div>
        </div>
      </section>

      <section className='battery section'>
        <div className='construction-image'>
          <img src={battery} alt="battery" />
        </div>
        <div>
          <h1>Meet the Hithium Battery</h1>
          <p>Chargeable via Solar or Grid, the Hithium Battery comes with a 2-year warranty and 10000 cycles.</p>
          <p className='p'>Get your Hithium Battery Today!</p>
        </div>
      </section>

      <section className='section'>
        <h1 className='header'>The Wandall Technologies Difference</h1>
        <div className='three-cubes-container'>
          {[
            'Home internet with 99% reliability',
            'Best Bandwidth Deals for Small Scale Clients',
            'Future-ready Developments'
          ].map((title, index) => (
            <div className='three-cubes' key={index}>
              <img src={wifi} alt="wifi icon" className="logo" />
              <h1>{title}</h1>
              <p>{index === 0 ? 'Everyone in your home can stream, game and meet with confidence.' :
                index === 1 ? 'Outreaching communities via links across the country.' :
                'Smart Homes via IOT solutions and structured cabling.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='contacts section'>
        <h1>Get in touch</h1>
        <p>Call us at +254-740-537-57 for any assistance</p>
        <p>Email us at info@wandalltechnologies.com and we'll get back to you</p>
      </section>

      <footer>
        Copyright © 2025 WANDALL TECHNOLOGIES LTD
      </footer>
    </>
  );
}

export default Home;