import '../css/home.css'
import construction from '../assets/construction-img.jpg'
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
        </>
    )
}
export default Home