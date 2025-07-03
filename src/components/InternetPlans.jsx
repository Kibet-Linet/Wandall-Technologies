import React, { useState } from 'react';
import '../css/internetplans.css';

const plans = [
  { name: 'Student', price: 1999, speed: '7 Mbps' },
  { name: 'Bronze', price: 2499, speed: '10 Mbps' },
  { name: 'Silver', price: 2999, speed: '15 Mbps' },
  { name: 'Gold', price: 3499, speed: '20 Mbps' },
  { name: 'Diamond', price: 4499, speed: '30 Mbps' },
  { name: 'Platinum', price: 6499, speed: '40 Mbps' },
];

function InternetPlans() {
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

  const handleGetConnected = (planName) => {
    setFormData((prev) => ({ ...prev, package: planName }));
    setShowForm(true);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (formData[key].trim() === '') {
        setSuccessMessage('');
        setErrorMessage('Please fill in all fields.');
        return;
      }
    }

    fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSuccessMessage('Your request was sent successfully!');
          setErrorMessage('');
          setShowForm(false);
          setFormData({
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
          });
        } else {
          setSuccessMessage('');
          setErrorMessage('Failed to send request. Please try again.');
        }
      })
      .catch(() => {
        setSuccessMessage('');
        setErrorMessage('An error occurred. Please try again later.');
      });
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setErrorMessage('');
    setSuccessMessage('');
    setFormData(initialFormState);
  };

  return (
    <div className="internet-plans-container" data-aos="fade-up">
      <h2>Choose Your Internet Plan</h2>
      <div className="plans-list">
        {plans.map((plan) => (
          <div key={plan.name} className="plan-card">
            <h2>{plan.name}</h2>
            <p>Price: KES {plan.price}</p>
            <p>Speed: {plan.speed}</p>
            <button onClick={() => handleGetConnected(plan.name)}>Get Connected</button>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="popup-form-overlay">
          <div className="popup-form">
            <button className="close-button" onClick={handleCloseForm}>×</button>
            <form onSubmit={handleSubmit}>
              <h1>Develop with Wandall Technologies LTD</h1>

              {formData.package && (
                <label>
                  Selected Package:
                  <input type="text" name="package" value={formData.package} readOnly />
                </label>
              )}

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
                   <select name="cableType" value={formData.cableType} onChange={handleChange} required>
                      <option value="" disabled hidden>-- Select Cable Type --</option>
                      <option value="Fiber Cable">Fiber Cable</option>
                      <option value="LAN Cable">LAN Cable</option>
                   </select>

                  </label>

                  <label>
                    Number of Floors:
                    <input type="number" name="floors" min="0" value={formData.floors} onChange={handleChange} required />
                  </label>

                  <label>
                    Number of Units:
                    <input type="number" name="units" min="1" value={formData.units} onChange={handleChange} required />
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
                <button onClick={handleCloseForm}>Exit</button>
                <button type="submit">Submit</button>   
              </div>

              {successMessage && <p className="success-message">{successMessage}</p>}
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default InternetPlans;
