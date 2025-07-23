import '../css/whyus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import greet from '../assets/greet.jpg'
import world from '../assets/world.jpg'
import kawifi from '../assets/kawifi.jpg'
import support from '../assets/support.jpg'
import virus from '../assets/virus.jpg'
import board from '../assets/board.jpg'
import construction from '../assets/construction.jpg'
import handshake from '../assets/handshake.jpg'
import wires from '../assets/wires.jpg'
import wifipeople from '../assets/wifi-icon-people.jpg'
import { useRef } from 'react';

function WhyUs(){
    const contactRef = useRef(null);

    return(
        <>
          <section className="whyus-intro-container" data-aos="fade-up">
             <div className="whyus-intro">
                <p>Our Commitment To Excellence</p>
                <h1>Why Choose Wandall Technologies?</h1>
                <p>When you partner with Wandall Technologies LTD, you're choosing a team dedicated to innovation, reliability, and customer satisfaction. Discover the difference that makes us the preferred connectivity provider.</p>
                {/* <p className='p'>Get Started Today</p> */}
             </div>
             <div>
                <img src={greet} className='construction-image'/>
             </div>
          </section>
            
          <section className='contacts section' data-aos="fade-up" ref={contactRef}>
              <h1>Get in touch</h1>
              <p>Call us at +254-740-537-57 for any assistance</p>
              <p>Email us at info@wandalltechnologies.com and we'll get back to you</p>
          </section>

          <section className='battery section' data-aos="fade-up">
              <div>
                <img src={world} className='battery-image'/>
              </div>

              <div>
                 <h1>Our Vision</h1>
                 <p>At Wandall Technologies LTD, we envision a world where connectivity is seamless, reliable, and accessible to all. We're committed to bridging digital divides and empowering communities through innovative connectivity solutions.</p>
                 {/* <p className='explore'>Learn About Our Mission</p> */}
              </div>
          </section>


          <h1 className="section-title" data-aos="fade-up">Key Advantages</h1>
          <section className="three-cubes-container section" data-aos="fade-up">
            {[
              {
                     img: kawifi,
                     title: 'Expert Team',
                     text: 'Our team of experienced professionals brings decades of combined expertise in telecommunications, networking, and information technology.',
              },

              {
                     img: virus,
                     title: 'Cutting-Edge Technology',
                     text: 'We utilize the latest and most advanced technologies to ensure our clients always have access to state-of-the-art connectivity solutions.',
              },

              {
                     img: support,
                     title: '24/7 Support',
                     text: 'Our dedicated support team is available around the clock to ensure your connectivity is always functioning at optimal levels.',
              },
              ].map((item, idx) => (
                   <div className="three-cube" key={idx}>
                     <img src={item.img} alt={item.title} />
                     <h2>{item.title}</h2>
                     <p>{item.text}</p>
                   </div>
            ))}
          </section>

          <h1 className="section-title" data-aos="fade-up">Our Approach</h1>
          <section className='whyus-approach' data-aos="fade-up">
            <div className='approach-container'>
              <div className='titless'>
                <h1 className='number'>1</h1>    
                <h1>Uniqueness</h1>
              </div>
              <div>
                <p>We're the only provider in the region offering a unique service. What is unique? Well we do what is called a system fail-over where we use multiple networks to prevent any internet interruptions</p>
                <img src={board}/>
              </div>
            </div>
            <div className='approach-container'>
              <div className='titless'>
                <h1 className='number'>2</h1>    
                <h1>Customized Solution Design</h1>
              </div>
              <div>
                <p>Choose us for a partner that's constantly evolving. For the partnerships we form as we go and the technological advancements like green power solutions and cyber security focusing on scalability and future needs.</p>
                <img src={handshake}/>
              </div>
            </div>
            <div className='approach-container'>
              <div className='titless'>
                <h1 className='number'>3</h1>    
                <h1>Professional Implementation</h1>
              </div>
              <div>
                <p>Our certified technicians handle every aspect of installation and configuration with precision and attention to detail, ensuring minimal disruption to your operations.</p>
                <img src={construction}/>
              </div>
            </div>
            <div className='approach-container'>
              <div className='titless'>
                <h1 className='number'>4</h1>    
                <h1>Proactive Monitoring & Support</h1>
              </div>
              <div>
                <p>We continuously monitor your connectivity infrastructure, identifying and resolving potential issues before they impact your operations, with responsive support whenever you need it.</p>
                <img src={wires}/>
              </div>
            </div>
          </section>


          <section className='commitment-section' data-aos="fade-up">
            <div className='commitment-container'>
              <h1>Our Commitment to Excellence</h1>
              <p>Wandall Technologies LTD is dedicated to delivering exceptional service and unparalleled connectivity solutions. Our commitment to excellence is reflected in every aspect of our operations.</p>
              <ul className="custom-icon-list">
                            <li><FontAwesomeIcon icon={faCheckCircle} className="tick-icon" /> Quality assurance at every step</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} className="tick-icon" /> Transparent communication and pricing</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} className="tick-icon" /> Continuous innovation and improvement</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} className="tick-icon" /> Environmental responsibility</li>
                            <li><FontAwesomeIcon icon={faCheckCircle} className="tick-icon" /> Community engagement and support</li>
              </ul>
            </div>

            <div>
              <img src={wifipeople} className='construction-image'/>
            </div>
          </section>

          <h1 className="section-title" data-aos="fade-up">What Our Clients Say</h1>
          <section className="profile-section" data-aos="fade-right">
            <div className="clients-container">
              <div className="smol-profile">
                <div className="profile-pic">A</div>
                <div className="profile-info">
                  <h1>Angela Wucherpfennig</h1>
                  <h2>Property Manager</h2>
                </div>
              </div>
              <p className="testimonial-text">
                  The Wandall Tech team helped us implement a property-wide connectivity solution that has impressed our residents and significantly reduced our maintenance calls. Highly recommended!
              </p>
              <p className="explore">★★★★★</p>
            </div>

            <div className="clients-container">
              <div className="smol-profile">
                <div className="profile-pic">K</div>
                <div className="profile-info">
                  <h1>Kevin Ingunyi</h1>
                  <h2>Small Business Owner</h2>
                </div>
              </div>
              <p className="testimonial-text">
                Wandall Technologies LTD transformed our connectivity infrastructure. Their team was professional, thorough, and incredibly responsive. We've seen a significant improvement in our network reliability and speed.
              </p>
              <p className="explore">★★★★★</p>
            </div>

            <div className="clients-container">
              <div className="smol-profile">
                <div className="profile-pic">B</div>
                <div className="profile-info">
                  <h1>Byron Nthiga</h1>
                  <h2>IT Director</h2>
                </div>
              </div>
              <p className="testimonial-text">
                We've worked with several connectivity providers, but Wandall Technologies LTD stands out for their technical expertise and commitment to customer satisfaction. Their support team is second to none.
              </p>
              <p className="explore">★★★★★</p>
            </div>
          </section>
           

          <section className='why-us-end' data-aos="fade-right">
            <h1>Ready to Experience the Wandall Tech Difference?</h1>
            <h2>Join the growing family of satisfied clients who trust Wandall Technologies for their connectivity needs.</h2>
            <div className='why-us-con'>
              <p onClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>Schedule a Consultation</p>
              {/* <p>View Our Solutions</p> */}
            </div>
          </section>
        </>
    )
}
export default WhyUs