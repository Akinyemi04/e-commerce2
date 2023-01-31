import logo from './img/logo.png'
import  appstore from './img/pay/app.jpg'
import pay from './img/pay/pay.png'
import playstore from './img/pay/play.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className='footer'>
        <section>
            <div>
                <h1>Sign Up For Newsletters</h1>
                <p> Get E-mail updates about our latest  shop and <i>special offers</i></p>
            </div>
            <aside>
                <input type="email" placeholder='Your email address' />
                <button>Sign Up</button>
            </aside>
        </section>
        <footer>
            <div className='one'>
                <img src={logo} alt="" />
                <h6>Contact</h6>
                <p>Address:<span>562 Wellington Road, Street 32, San Francisco </span></p>
                <p>Phone:<span> +01 2222 365 /(+91) 01 2345 6789</span></p>
                <p>Hours : <span>10:00 -18:00, Mon-Sat</span></p>
                <span className='special'> Follow Us</span>
                <p className='link_icon'>
                    <FacebookIcon className='iconx'/>
                    <TwitterIcon  className='iconx'/>
                    <InstagramIcon className='iconx'/>
                    <PinterestIcon className='iconx'/>
                    <YouTubeIcon className='iconx'/>
                </p>
            </div>
            <aside>
            <div className='two'>
                <h6>About</h6>
                <span>About Us</span>
                <span>Delivery Information</span>
                <span>Privacy Policy</span>
                <span> Terms & Conditions</span>
                <span> Contact Us</span>
            </div>
            <div className='three'>
                <h6>My Account</h6>
                <span> Sign In</span>
                <span>View Cart</span>
                <span>My Wishlist</span>
                <span>Track My Order</span>
                <span>Help</span>
            </div>
            </aside>
            <div className='four'>
                <h6>Install App</h6>
                <span >From App Store Or Google Play</span>
                <span className='p_one'><img src={appstore} alt="" /><img src={playstore} alt="" /></span>
                <span>Secured Payment Gateways</span>
                <img src={pay} alt="" />
            </div>
        </footer>
    </div>
  )
}

export default Footer;