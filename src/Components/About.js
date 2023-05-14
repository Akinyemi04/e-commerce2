import './about.css'
import f1 from './img/features/f1.png'
import f2 from './img/features/f2.png'
import f3 from './img/features/f3.png'
import f4 from './img/features/f4.png'
import f5 from './img/features/f5.png'
import f6 from './img/features/f6.png'
import video from './img/about/vid.mp4'
import happy from './img/about/a6.jpg'
import ScrollToTop from './ScrollToTop'

const About = () => {
  return (
    <div className="about">
      <ScrollToTop/>
      <header>
        <h1>#KnowUs</h1>
        <p>Lorem ipsum dolor sit amet,consectetur</p>
      </header>
      <main>
        <img src={happy} alt="" />
        <div>
            <h1>Who Are We?</h1>
            <p className='major-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quisquam fugit, debitis sunt corporis adipisci accusamus magni non nostrum animi. Maxime praesentium libero illum nobis rem quisquam excepturi odio ea.</p>
            <p className='minor-text'>Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative mades</p>
            <p className='animate'>
              <span>Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative mades</span>
            </p>
        </div>
      </main>
      <section>
        <h1>Download Our <strong>App</strong></h1>
        <video autoPlay loop playsInline>
          <source  src={video} type='video/mp4'/>
        </video>
      </section>
       <ul className='list'>
          <li>
            <img src={f1} alt="" />
            <span style={{backgroundColor:'rgba(232, 195, 213,0.5)',color:'#465b52'}}>Free Shipping</span>
          </li>
          <li>
          <img src={f2} alt="" />
            <span style={{backgroundColor:'rgba(41, 135, 20,0.5)',color:'rgb(36, 77, 27)'}}>Online Classes</span>
          </li>
          <li>
          <img src={f3} alt="" />
            <span style={{backgroundColor:'rgba(101, 129, 18,0.5)',color:'rgb(66, 86, 125)'}}>Save Money</span>
          </li>
          <li>
          <img src={f4} alt="" />
            <span style={{backgroundColor:'rgba(49, 59, 120,0.5)',color:'rgb(15, 23, 77)'}}>Promotions</span>
          </li>
          <li>
          <img src={f5} alt="" />
            <span style={{backgroundColor:'rgba(240, 211, 22,0.5)',color:'rgb(81, 92, 99)'}}>Happy Sell</span>
          </li>
          <li>
          <img src={f6} alt="" />
            <span style={{backgroundColor:'rgba(240, 211, 22,0.5)',color:'rgb(143, 161, 140)'}}>24/7 Support</span>
          </li>
        </ul>
    </div>
  )
}

export default About;