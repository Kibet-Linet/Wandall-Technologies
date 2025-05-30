import '../css/whyus.css'
import greet from '../assets/greet.jpg'
import world from '../assets/world.jpg'
import kawifi from '../assets/kawifi.jpg'
import support from '../assets/support.jpg'
import virus from '../assets/virus.jpg'
function WhyUs(){
    return(
        <>
         <section className="whyus-intro-container">
             <div className="whyus-intro">
                <p>Our Commitment To Excellence</p>
                <h1>Why Choose Wandall Technologies?</h1>
                <p>When you partner with Wandall Technologies LTD, you're choosing a team dedicated to innovation, reliability, and customer satisfaction. Discover the difference that makes us the preferred connectivity provider.</p>
                <p className='p'>Get Started Today</p>
             </div>
             <div>
                <img src={greet} className='construction-image'/>
             </div>
         </section>


         <section className='battery section'>
              <div>
                <img src={world} className='battery-image'/>
              </div>

              <div>
                 <h1>Our Vision</h1>
                 <p>At Wandall Technologies LTD, we envision a world where connectivity is seamless, reliable, and accessible to all. We're committed to bridging digital divides and empowering communities through innovative connectivity solutions.</p>
                 <p className='explore'>Learn About Our Mission</p>
              </div>
         </section>

           <h1 className="section-title">Key Advantages</h1>
            <section className="three-cubes-container section">
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
                     title: 'Green Energy Consultation',
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


            <section>
                
            </section>
        </>
    )
}
export default WhyUs