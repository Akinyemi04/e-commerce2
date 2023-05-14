import { useEffect } from 'react'
import './blog.css'
import b1 from './img/blog/b1.jpg'
import b2 from './img/blog/b2.jpg'
import b3 from './img/blog/b3.jpg'
import b4 from './img/blog/b4.jpg'
import b6 from './img/blog/b6.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from './ScrollToTop'

const Blog = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div className='blog'>
      <ScrollToTop/>
        <header>
          <h1>#readmore</h1>
          <p>Read all case studies about our products!</p>
        </header>
        <main>
          <div data-aos='zoom-in'>
            <img src={b1} alt="" />
            <span>13/01</span>
            <section>
              <h2>The Cotton-Jersey Zip-up Hoodie</h2>
              <p className='kickstarter'>Kickstarter man braid godard coloring book.Raclette waistcoat selfies yr wolf chartreuse hezagon irony. godard ...</p>
              <div  className='pin'>CONTINUE READING <hr /></div>
            </section>
          </div>
          <div  data-aos='zoom-in'>
          <img src={b2} alt="" />
            <span>13/04</span>
            <section>
              <h2>How To Style  a Quiff</h2>
              <p className='kickstarter'>Kickstarter man braid godard coloring book.Raclette waistcoat selfies yr wolf chartreuse hezagon irony. godard ...</p>
              <div  className='pin'>CONTINUE READING <hr /></div>
            </section>
          </div>
          <div  data-aos='zoom-in'>
          <img src={b3} alt="" />
            <span>12/01</span>
            <section>
              <h2>Must Have Skater Girl Items</h2>
              <p className='kickstarter'>Kickstarter man braid godard coloring book.Raclette waistcoat selfies yr wolf chartreuse hezagon irony. godard ...</p>
              <div className='pin'>CONTINUE READING <hr /></div>
            </section>
          </div>
          <div  data-aos='zoom-in'>
          <img src={b4} alt="" />
            <span>16/01</span>
            <section>
              <h2>Runway-Inspired Trends</h2>
              <p className='kickstarter'>Kickstarter man braid godard coloring book.Raclette waistcoat selfies yr wolf chartreuse hezagon irony. godard ...</p>
              <div  className='pin'>CONTINUE READING <hr /></div>
            </section>
          </div>
          <div  data-aos='zoom-in'>
          <img src={b6} alt="" />
            <span>10/02</span>
            <section>
              <h2>AW20 Menswear Trends</h2>
              <p className='kickstarter'>Kickstarter man braid godard coloring book.Raclette waistcoat selfies yr wolf chartreuse hezagon irony. godard ...</p>
              <div  className='pin'>CONTINUE READING <hr /></div>
            </section>
          </div>
          <p className='page'><span>1</span><span>2</span><span className='spec' ><ArrowForwardIcon className='arrow'/></span></p>
        </main>
    </div>
  )
}

export default Blog;