import '../css/home.css'
import construction from '../assets/construction-img.jpg'
import wifi from '../assets/wifi-icon-people.jpg'
import greenpower from '../assets/green-power-icon.jpg'
import cybersecurity from '../assets/cybersecurity-icon.jpg'
import powergrid from '../assets/power-grid.jpg'
import starlink from '../assets/starlink.jpg'
import battery from "../assets/battery.jpg"
function Home(){
    return(
        <>
            <div className="intro">
                <div className='intro-text'>
                    <h3>BUILDING CONNECTIONS FOR A BRIGHTER FUTURE</h3>
                    <h1>CONNECT, <br/>INNOVATE,GROW</h1>
                    <p>Our dedication to future-proofing businesses through Intelligent Connectivity enables building connections that enhance a technlogical future.</p>
                    <p className='p'>Develop With Wandall Technologies LTD</p>
                </div>

                <div className='construction-image'>
                    <img src={construction} alt="construction" />
                </div>
            </div>


            <div className='three-cubes-container'>
                <div className='three-cubes'>
                    <img src={wifi} alt="wifi icon" className="logo"/>
                    <h1>Home/Business Internet Plans</h1>
                    <p>Providing Affordable High-speed wifi solutions for your households or businesses.</p>
                    <p className='p'>Learn more</p>
                </div>

                <div className='three-cubes'>
                    <img src={cybersecurity} alt="cyber security icon" className="logo"/>
                    <h1>Cybersecurity</h1>
                    <p>We are Integrators offering a unified platform that combines CCTV footage, biometric data, and other security measures.</p>
                    <p className='p'>Learn more</p>
                </div>

                 <div className='three-cubes'>
                    <img src={greenpower} alt="green power" className="logo"/>
                    <h1>Green-Power solutions</h1>
                    <p>Intergrating Solar Powered solutions for homes and businesses together with backup generators for commercial use.</p>
                    <p className='p'>Learn more</p>
                </div>
            </div>


            <div className='bandwidth'>
                <div>
                  <p>Bandwidth</p>
                  <h1>Get Dedicated Internet Access(DIA) today from as low as Kshs 250 Only</h1>
                  <p>Scaling with Wandall Technologies Dedicated Capacity Solutions and Partnerships</p>
                  <p className='p'>Call Us Today</p>
                </div>
                <div>
                    <div className='construction-image'>
                    <img src={powergrid} alt="construction" />
                </div>
                </div>
            </div>


            <div className='starlink'>
                 <div>
                    <h1>Meet the Starlink Gen2 & Gen3 Devices</h1>
                    <p>This advanced satellite device is compatible with 3G and 4G LTE networks, ensuring seamless connectivity anywhere in the country even while on Safari. The device is designed to deliver high-speed broadband connectivity via satellite connection.</p>
                    <p className='p'>Get the Starlink Kit Now!</p>
                 </div>

                <div className="construction-image">
                    <div className="outer-box">
                        <div className="inner-box">
                        <img src={starlink} alt="construction" />
                        </div>
                    </div>
                </div>

            </div>


            <div className='battery'>
                <div>
                  <img src={battery} alt="construction" />  
                </div>  

                <div>
                   <h1>Meet the Hithium Battery</h1> 
                   <p>The compact device is designed to deliver as a power backup. The device is Chargeable via both Solar and usual Grid-Power with a 2 Year Warranty of 10000cycles. Affordable, Reliable and Long-Lasting.</p> 
                   <p className='p'>Get your Hithium Battery Today!</p>
                </div>
            </div>


            <div>
                <h1>The Wandall Technologies Difference</h1>
                <div className='three-cubes-container'>
                    <div className='three-cubes'>
                       <img src={wifi} alt="wifi icon" className="logo"/>
                       <h1>Home internet with 99% reliability</h1>
                       <p>Everyone in your home can have conference meetings, stream, share and game with confidence.</p>
                    </div>

                    <div className='three-cubes'>
                        <img src={wifi} alt="wifi icon" className="logo"/>
                        <h1>Best Bandwidth Deals for our Small Scale Clients</h1>
                        <p>Outreaching communities via links across the country.</p>
                    </div>

                    <div className='three-cubes'>
                        <img src={wifi} alt="wifi icon" className="logo"/>
                        <h1>Future-ready Developments</h1>
                        <p>Partnerships with developers to create modernised Smart Homes via our IOT solutions and advised structured cabling solutions</p>
                    </div>
                </div>
            </div>


            <div className='contacts'>
               <h1>Get in touch</h1>
               <p>Call us anytime at ‪+254-740-537-572‬ for any assistance
               </p>
               <p>Send us an email at info@wandalltechnologies.com and we'll get back to you</p>
            </div>

            <footer>Copyright © 2025 WANDALL TECHNOLOGIES LTD</footer>
        </>
    )
}
export default Home