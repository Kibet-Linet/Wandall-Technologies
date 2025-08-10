import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css';
import construction from '../assets/construction-img.jpg';
import wifi from '../assets/wifi-icon-people.jpg';
import greenpower from '../assets/green-power-icon.jpg';
import cybersecurity from '../assets/cybersecurity-icon.jpg';
import powergrid from '../assets/power-grid.jpg';
import starlink from '../assets/starlink.jpg';
import battery from "../assets/battery.jpg";
import Inventory from './Inventory';
import internetplansicon from '../assets/internetplanicon.jpg';
import security from '../assets/security.jpg';
import homesolar from '../assets/homesolar.jpg';
import futureready from '../assets/futureready.jpeg';
import kawifi2 from '../assets/kawifi2.png';
import banddeals from '../assets/banddeals.jpeg';

function Home() {
  const navigate = useNavigate();
  const [showInventory, setShowInventory] = useState(false);
  const contactRef = useRef(null);
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const initialFormState = {
    package: '',
    projectType: '',
    cableType: '',
    floors: '',
    units: '',
    county: '',
    town: '',
    name: '',
    email: '',
    phone: '',
  };

  const [formData, setFormData] = useState(initialFormState);

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

  const handleNavigate = (path) => () => {
    navigate(path);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define fields that are always required
    const requiredFields = [
      'projectType',
      'name',
      'county',
      'town',
      'email',
      'phone'
    ];

    // Add conditional fields for specific project types
    if (formData.projectType === 'Internet Supply Contract' || formData.projectType === 'Structural Cabling') {
      requiredFields.push('cableType', 'floors', 'units');
    }

    // Check if any required field is missing or empty (trimmed)
    for (const field of requiredFields) {
      const value = formData[field];
      if (value === null || value === undefined || value.toString().trim() === '') {
        setSuccessMessage('');
        setErrorMessage('Please fill in all fields.');
        return;
      }
    }

    // Clear previous messages
    setErrorMessage('');
    setSuccessMessage('');
     
    const filledFormData = Object.fromEntries(
    Object.entries(formData).filter(([ , v]) => v.trim() !== '')
    );
    // Proceed with API call
    fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filledFormData ),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSuccessMessage('Message sent successfully. We will get back to you."');
          setErrorMessage('');
          setShowForm(false);
          setFormData(initialFormState);
        } else {
          setSuccessMessage('');
          setErrorMessage('Failed to send request. Please try again.');
        }
      })
      .catch(() => {
        setSuccessMessage('');
        setErrorMessage('An error occurred. Please try again later.');
      });
      setTimeout(() => {
      setSuccessMessage('');
      }, 5000);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setErrorMessage('');
    setSuccessMessage('');
    setFormData(initialFormState);
  };

  return (
    <>
      {successMessage && (
          <div className="success-popup">
            {successMessage}
          </div>
      )}
      <section className="intro section" data-aos="fade-up">
        <div className='intro-text'>
          <h1>BUILDING CONNECTIONS FOR A BRIGHTER FUTURE</h1>
          <h3>CONNECT, INNOVATE, GROW</h3>
          <p>Our dedication to future-proofing businesses through Intelligent Connectivity enables building connections that enhance a technological future.</p>
          <p
            className='p'
            onClick={() => setShowForm(true)}
            style={{ cursor: 'pointer', color: 'White' }}
          >
            Develop With Wandall Technologies LTD
          </p>
        </div>
        <div className='construction-image'>
          <img src={construction} alt="construction" />
        </div>
      </section>

      <section className='three-cubes-container section' data-aos="fade-up">
        {[
          {
            img: internetplansicon,
            title: 'Internet Services',
            text: 'Providing Affordable High-speed wifi solutions for your households or businesses.',
            link: '/internet-plans'
          },
          {
            img: security,
            title: 'CCTV and Biometric Systems',
            text: 'Unified platform combining CCTV, biometric data, and security measures.',
            link: '/cyber-security'
          },
          {
            img: homesolar,
            title: 'Power Backup',
            text: 'Solar and Power Battery solutions for homes and businesses.',
            link: '/green-power'
          }
        ].map((item, idx) => (
          <div key={idx} className='three-cubes' onClick={handleNavigate(item.link)} style={{ cursor: 'pointer' }}>
            <img src={item.img} alt={item.title} className="logo" />
            <h1>{item.title}</h1>
            <p>{item.text}</p>
            <p className='p'>Learn more</p>
          </div>
        ))}
      </section>

      <section className='bandwidth section' data-aos="fade-up">
        <div>
          <p>Bandwidth</p>
          <h1>Get Dedicated Internet Access(DIA) today from as low as Kshs 370 Only</h1>
          <p>Scaling with Wandall Technologies Dedicated Capacity Solutions and Partnerships</p>
          <p
            className='p'
            onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
          >
            Call Us Today
          </p>
        </div>
        <div className='construction-image'>
          <img src={powergrid} alt="construction" />
        </div>
      </section>

      <section className='starlink section' data-aos="fade-up">
        <div>
          <h1>Meet the Starlink Gen2 & Gen3 Devices</h1>
          <p>Advanced satellite device compatible with 3G/4G networks, delivering high-speed broadband via satellite connection.</p>
          <p className='p' onClick={() => setShowInventory(true)}>Get the Starlink Kit Now!</p>
        </div>
        <div className='construction-image'>
          <div className="outer-box">
            <div className="inner-box">
              <img src={starlink} alt="Starlink" />
            </div>
          </div>
        </div>
      </section>

      <section className='battery section' data-aos="fade-up">
        <div className='construction-image'>
          <img src={battery} alt="battery" />
        </div>
        <div>
          <h1>Meet the Hithium Battery</h1>
          <p>Chargeable via Solar or Grid, the Hithium Battery comes with a 2-year warranty and 10000 cycles.</p>
          <p className='p' onClick={() => setShowInventory(true)}>Get your Hithium Battery Today!</p>
        </div>
      </section>

      <section className='section' data-aos="fade-up">
        <h1 className='header'>The Wandall Technologies Difference</h1>
      </section>

       <section className='three-cubes-container section' data-aos="fade-up">
        {[
          {
            img: kawifi2,
            title: 'Home internet with 99% reliability',
            text: 'Everyone in your home can stream, game and meet with confidence.'
          },
          {
            img: banddeals,
            title: 'Best Bandwidth Deals for Small Scale Clients',
            text: 'Outreaching communities via links across the country.'
          },
          {
            img: futureready,
            title: 'Future-ready Developments',
            text: 'Smart Homes via IOT solutions and structured cabling.'
          }
        ].map((item, idx) => (
          <div key={idx} className='three-cubes' onClick={handleNavigate(item.link)} style={{ cursor: 'pointer' }}>
            <img src={item.img} alt={item.title} className="logo" />
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className='contacts section' data-aos="fade-up" ref={contactRef}>
        <h1>Get in touch</h1>
        <p>Call us at +254-740-537-572 for any assistance</p>
        <p>Email us at info@wandalltechnologies.com and we'll get back to you</p>
      </section>

      <footer data-aos="slide-up">
        Copyright © 2025 WANDALL TECHNOLOGIES LTD
      </footer>

      {/* POPUP FORM */}
      {showForm && (
        <div className="popup-form-overlay">
          <div className="popup-form">
            <button className="close-button" onClick={handleCloseForm}>×</button>
            <form onSubmit={handleSubmit}>
              <h1>Develop with Wandall Technologies LTD</h1>

              <label>
                Project Type:
                <select name="projectType" value={formData.projectType} onChange={handleChange} required>
                  <option value="" disabled hidden>-- Select Project Type --</option>
                  <option value="Internet Supply Contract">Internet Supply Contract</option>
                  <option value="Structural Cabling">Structural Cabling</option>
                  <option value="Investor">Investor</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Hotspot Business">Hotspot Business</option>
                </select>
              </label>

              {(formData.projectType === 'Internet Supply Contract' || formData.projectType === 'Structural Cabling') && (
                <>
                  <label>
                    Cable Type:
                    <select
                      name="cableType"
                      value={formData.cableType}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled hidden>-- Select Cable Type --</option>
                      <option value="Fiber Cable">Fiber Cable</option>
                      <option value="LAN Cable">LAN Cable</option>
                    </select>
                  </label>

                  <label>
                    Number of Floors:
                    <input
                      type="number"
                      name="floors"
                      min="0"
                      value={formData.floors}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label>
                    Number of Units:
                    <input
                      type="number"
                      name="units"
                      min="1"
                      value={formData.units}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </>
              )}

              <label>
                Full Name / Company Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </label>

              <div className="location-row">
                <label>
                  County:
                  <input type="text" name="county" value={formData.county} onChange={handleChange} required />
                </label>
                <label>
                  Town:
                  <input type="text" name="town" value={formData.town} onChange={handleChange} required />
                </label>
              </div>

              <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>

              <label>
                Contact:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </label>

              <div className="form-buttons">
                <button type="button" onClick={handleCloseForm}>Exit</button>
                <button type="submit">Submit</button>
              </div>

              {successMessage && <p className="success-message">{successMessage}</p>}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>
        </div>
      )}

      {showInventory && <Inventory onClose={() => setShowInventory(false)} />}
    </>
  );
}

export default Home;
