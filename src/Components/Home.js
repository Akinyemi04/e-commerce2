import girl from './img/hero4.png'
import button from './img/button.png'
import f1 from './img/features/f1.png'
import f2 from './img/features/f2.png'
import f3 from './img/features/f3.png'
import f4 from './img/features/f4.png'
import f5 from './img/features/f5.png'
import f6 from './img/features/f6.png'
import d1 from './img/products/f1.jpg'
import d2 from './img/products/f2.jpg'
import d3 from './img/products/f3.jpg'
import d4 from './img/products/f4.jpg'
import d5 from './img/products/f5.jpg'
import d6 from './img/products/f6.jpg'
import d7 from './img/products/f7.jpg'
import d8 from './img/products/f8.jpg'
import n1 from './img/products/n1.jpg'
import n2 from './img/products/n2.jpg'
import n3 from './img/products/n3.jpg'
import n4 from './img/products/n4.jpg'
import n5 from './img/products/n5.jpg'
import n6 from './img/products/n6.jpg'
import n7 from './img/products/n7.jpg'
import n8 from './img/products/n8.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useDispatch, useSelector } from 'react-redux'
import { home_action } from './store'
const Home = () => {
  const data = useSelector((val)=>{
    return val.Home.data
  })
  const dispatch = useDispatch()

  function click(e){
    const prevelement = e.target.previousElementSibling
    const attribute =prevelement.getAttribute('src')
    let status = false
    const datax ={
      product:'Cartoon Astronaut T-shirts',
      price:78,
      quantity:1,
      image: attribute
    }
    if(data.length === 0){
      dispatch(home_action.add(datax))
    }
    else{
      data.map((val,index)=>{
        if(val.image === attribute){
          status =true 
          dispatch(home_action.changeQuantity(index))
        }
      })
      if(!status){
        dispatch(home_action.add(datax))
      }
    }
  }
  return (
    <div className='home'>
        <section>
            <aside>
                <h1>Trade-in-offer</h1>
                <p className='super'>Super value deals</p>
                <p className='product'>On all products</p>
                <p className='span'>Save more with coupons & up to 70% off!</p>
                <div  className='button'>
                    <img src={button} alt="" />
                    <span className='shop'>Shop Now</span>
                </div>
            </aside>
            <img className='img' src={girl} alt="" />
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
        <section className='products'>
          <h3>Featured Products</h3>
          <p>Summer Collection New Mordem Design</p>
          <section className='clothes'>
            <div>
              <img src={d1} alt="" />
              <span className='cart_me'   onClick={click}><ShoppingCartOutlinedIcon/></span>
              <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
                <StarOutlinedIcon/>
                <StarOutlinedIcon/>
                <StarOutlinedIcon/>
                <StarOutlinedIcon/>
                <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
            <div>
            <img src={d2} alt="" />
            <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
            <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
            <div>
            <img src={d3} alt="" />
            <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
            <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
            <div>
            <img src={d4} alt="" />
            <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
            <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
            <div>
            <img src={d5} alt="" />
            <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
            <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
            <div>
            <img src={d6} alt="" />
            <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
            <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
            <div>
            <img src={d7} alt="" />
            <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
            <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
            <div>
              <img src={d8} alt="" />
              <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
              <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
          </section>
        </section>
        <aside className='action'>
            <span>Repair Services</span>
            <h4>Up to <i>70% Off</i>- All t-Shirts & Accessories</h4>
            <button>Explore More</button>
        </aside>
        <section className='products'>
          <h3>New Arrivals</h3>
          <p>Summer Collection New Mordem Design</p>
          <section className='clothes'>
            <div>
              <img src={n1} alt="" />
              <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
              <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
            <div>
            <img src={n2} alt="" />
            <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
            <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
            <div>
            <img src={n3} alt="" />
            <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
            <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
            <div>
            <img src={n4} alt="" />
            <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
            <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
            <div>
            <img src={n5} alt="" />
            <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
            <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
            <div>
            <img src={n6} alt="" />
            <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
            <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
            <div>
            <img src={n7} alt="" />
            <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
            <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
            <div>
              <img src={n8} alt="" />
              <span className='cart_me' onClick={click} ><ShoppingCartOutlinedIcon/></span>
              <p className='adidas'>addidas</p>
              <h6>Cartoon Astronaut T-shirt</h6>
              <p>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              <StarOutlinedIcon/>
              </p>
              <span className='price'>$78</span>
            </div>
          </section>
        </section>
        <section className='banner'>
            <div className='one'>
              <span id='deal'>crazy deals</span>
              <h3>buy 1 get 1 free</h3>
              <p>The best classic dress in on sale at cara</p>
              <span id='more'>Learn More</span>
            </div>
            <div className='two'>
              <span id='deal'>spring/summer</span>
              <h3>upcoming seasion</h3>
              <p>The best classic dress is on sale at cara</p>
              <span id='more'>Collection</span>
            </div>
            <div className='three'>
              <h2>SEASONAL SALE</h2>
              <p>Winter Collection- 50% OFF</p>
            </div>
            <div className='four'>
              <h2>NEW FOOTWEAR COLLECTION</h2>
              <p>Spring/Summer 2023</p>
            </div>
            <div className='five'>
              <h2>T-SHIRTS</h2>
              <p>New Trendy Prints</p>
            </div>
        </section>
    </div>
  )
}

export default Home