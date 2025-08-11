import { useState } from 'react';
import '../css/internetplans.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const plans = [
  { name: 'Student', price: 1599, speed: '7 Mbps' },
  { name: 'Bronze', price: 1999, speed: '10 Mbps' },
  { name: 'Silver', price: 2999, speed: '15 Mbps' },
  { name: 'Gold', price: 3499, speed: '20 Mbps' },
  { name: 'Diamond', price: 4499, speed: '30 Mbps' },
  { name: 'Platinum', price: 6499, speed: '50 Mbps' },
];

function InternetPlans() {
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const initialFormState = {
  package: '',
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

    const filledFormData = Object.fromEntries(
    Object.entries(formData).filter(([ , v]) => v.trim() !== '')
    );

    fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filledFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSuccessMessage('Message sent successfully. We will get back to you.');
          setErrorMessage('');
          setShowForm(false);
          setFormData({
            package: '',
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

    <div className="internet-plans-container" data-aos="fade-up">
      <h1 className="section-title" data-aos="fade-up">Choose Your Internet Plan</h1>
      <div className="plans-list">
        {plans.map((plan) => (
          <div key={plan.name} className="plan-card">
            <h2><b>{plan.name}</b></h2>
            <h1><b>{plan.speed}</b></h1>
            <h3><b>KES {plan.price}/month</b></h3>
            <ul className="custom-icon-list-internet-plans">
                          <li><FontAwesomeIcon icon={faCheckCircle} className="tick-icon" /> Unlimited Data</li>
                          <li><FontAwesomeIcon icon={faCheckCircle} className="tick-icon" /> 24/7 Customer Support</li>
                          <li><FontAwesomeIcon icon={faCheckCircle} className="tick-icon" /> Free Installation</li>
                          <li><FontAwesomeIcon icon={faCheckCircle} className="tick-icon" /> Complementary Router</li>
            </ul>
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
                Floor Number:
                <input type="number" name="floors" min="0" value={formData.floors} onChange={handleChange} required />
              </label>

              <label>
                Unit Name:
                <input type="text" name="units" min="1" value={formData.units} onChange={handleChange} required />
              </label>
              
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
    </>
  );
}

export default InternetPlans;
