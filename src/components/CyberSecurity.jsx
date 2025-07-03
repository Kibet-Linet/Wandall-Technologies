import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import worldcircuit from '../assets/world-circuit.jpg'
import biometric from '../assets/biometric.jpg'
import cctv from '../assets/cctv.jpg'
import networksecurity from '../assets/padlock.jpg'
import lock from '../assets/lock.jpg'
import '../css/cybersecurity.css'

function CyberSecurity(){
    return(
        <>
        <section className="intro section" data-aos="fade-up">
            <div className='intro-text'>
                <p>Protecting Your Digital Presence</p>
                <h1>Advanced Cybersecurity Solutions</h1>
                <p>In today's interconnected world, securing your digital assets is more important than ever. Our comprehensive cybersecurity solutions protect your business and personal data from emerging threats.</p>
                <p className="p">Get Protected Today</p>
            </div>

            <div className='construction-image'>
                <img src={worldcircuit}/>
            </div>
        </section>

       
                  <h1 data-aos="fade-up">Our Cybersecurity Services</h1>
        <section className='three-cubes-container section' data-aos="fade-up">
                    {[ 
                      {
                        img: biometric,
                        title: 'Biometric Systems',
                        text: 'Advanced biometric and multi-factor authentication systems to ensure only authorized users can access your systems.'
                      },
                      {
                        img: cctv,
                        title: 'Surveillance Systems',
                        text: 'State-of-the-art CCTV and monitoring solutions for physical security integrated with your digital security infrastructure.'
                      },
                      {
                        img: networksecurity,
                        title: 'Network Security',
                        text: 'Comprehensive protection for your network infrastructure with advanced firewalls, intrusion detection, and prevention systems.'
                      }
                    ].map((item, idx) => (
                      <div className='three-cubes' key={idx} >
                        <img src={item.img} alt={item.title} className="cyber-security-img" />
                        <h1>{item.title}</h1>
                        <p>{item.text}</p>
                        <p className='p'>Learn more</p>
                      </div>
                    ))}
        </section>
       

        <section className='bandwidth section' data-aos="fade-up">
          <div className='construction-image'>
            <img src={lock}/>
          </div>
          <div>
            <h1>Advanced Protection for the Digital Age</h1>
            <p>Our cybersecurity solutions employ cutting-edge technologies to protect against the most sophisticated cyber threats. From small businesses to large enterprises, we provide tailored security measures to keep your data safe.</p>
            <ul className="custom-icon-list">
              <li><FontAwesomeIcon icon={faCheckCircle} className="tick-icon" /> 24/7 Security Monitoring</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="tick-icon" /> Data Encryption Services</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="tick-icon" /> Vulnerability Assessment</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="tick-icon" /> Incident Response Planning</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="tick-icon" /> Employee Security Training</li>
            </ul>

            <p className='p'>Request a Security Audit</p>
          </div>
        </section>


        <section data-aos="fade-up">
          <div className='ready-cybersecurity'>
              <div>
                <h1>Ready to Secure Your Digital Future?</h1>
                <p>Partner with Wandall Technologies LTD for comprehensive cybersecurity solutions designed to protect your valuable data and systems.</p>
              </div>
              <div className='p-brothers'>
                <p className='p'>Contact Our Security Experts</p>
                <p className='p'>Request a Free Consultation</p>
              </div>
          </div>
        </section>


       <footer data-aos="slide-up">
        Copyright © 2025 WANDALL TECHNOLOGIES LTD
       </footer>
        </>

    )
}
export default CyberSecurity