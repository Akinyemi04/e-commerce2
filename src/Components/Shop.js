import './shop.css'
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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useDispatch, useSelector } from 'react-redux'
import { home_action } from './store'
const Shop = () => {
  const dispatch = useDispatch()
  const data = useSelector((val)=>{
    return val.Home.data
  })
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
    <div className='shop'>
      <header>
        <h1>#stayhome</h1>
        <p>Save more with coupons on up to 70% off !</p>
      </header>
      <section className='products'>
          <section className='clothes'>
            <div>
              <img src={d1} alt="" />
              <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
            <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
            <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
            <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
            <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
            <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
            <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
              <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
              <img src={n1} alt="" />
              <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
            <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
            <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
            <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
            <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
            <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
            <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
              <span className='cart_me' onClick={click}><ShoppingCartOutlinedIcon/></span>
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
        <p><span>1</span><span>2</span><span className='spec' ><ArrowForwardIcon className='arrow'/></span></p>
    </div>
  )
}

export default Shop;