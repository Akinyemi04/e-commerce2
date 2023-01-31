import './contact.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import p1 from './img/people/1.png'
import p2 from './img/people/2.png'
import p3 from './img/people/3.png'
const Contact = () => {
  return (
    <div className="contact">
        <header>
        <h1>#let's_talk</h1>
        <p>LEAVE A MESSAGE,We love to hear from you!</p>
      </header>
      <main>
        <section>
          <span className='spany'>GET IN TOUCH</span>
          <p className='bigx'>Visit one of our agency locations or contact us today</p>
          <h5>Head Office</h5>
          <p className='fade'><ImportContactsOutlinedIcon className='corn'/><span>56 Glassford Street Glasgow  G1 1UL New York</span></p>
          <p className='fade'><MailOutlineOutlinedIcon className='corn'/><span>contact@example.com</span></p>
          <p className='fade'><PhoneIcon className='corn'/><span>contact@example.com</span></p>
          <p className='fade'> <AccessTimeIcon className='corn'/><span> Monday to Saturday 9.00am to 16 pm</span></p>
        </section>
        <aside>
        <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" frame-border="0" scrolling="no" margin-height="0" margin-width="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        </div>
        </aside>
      </main>
      <form action="">
          <section className='one'>
            <span className='spanx'>LEAVE A MESSAGE</span>
            <h2>We love to hear from  you</h2>
            <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='E-mail' />
            <input type="text" placeholder='Subject' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
            <span className='button'>Submit</span>
          </section>
          <section className='two'>
            <div>
              <img src={p1} alt="" />
              <aside>
                <h4>John Doe</h4>
                <p>Senior Marketing Manager</p>
                <p>Phone: + 000 123 000 77 88</p>
                <p>Email:contact@example.com</p>
              </aside>
            </div>
            <div>
            <img src={p2} alt="" />
              <aside>
                <h4>William Smith</h4>
                <p>Senior Marketing Manager</p>
                <p>Phone: + 000 123 000 77 88</p>
                <p>Email:contact@example.com</p>
              </aside>
            </div>
            <div>
            <img src={p3} alt="" />
              <aside>
                <h4>Emma Joe</h4>
                <p>Senior Marketing Manager</p>
                <p>Phone: + 000 123 000 77 88</p>
                <p>Email:contact@example.com</p>
              </aside>
            </div>
          </section>
        </form>
    </div>
  )
}

export default Contact;