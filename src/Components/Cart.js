import'./cart.css'
import  CancelOutlinedIcon  from '@mui/icons-material/CancelOutlined';
import f1 from './img/products/f1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { home_action } from './store';
import { useEffect } from 'react';
const Cart = () => {
  const data = useSelector((val)=>{
    return val.Home.data
  })
  const Total_value = useSelector((val)=>{
    return val.Home.Total_value
  })
  const dispatch = useDispatch()
  useEffect(()=>{
    data.map((val)=>{
      dispatch(home_action.changeTotal((val.quantity * val.price)))
    })
   
  },[data])
  function changing(e){
    const attribute= e.target.getAttribute('number')
    console.log(e.target.value)
    const object = {
      index:attribute,
      value: parseInt(e.target.value)
    }
    dispatch(home_action.adjustQuantity({object}))
  }
  function deletee(e){
    const next = e.target.nextElementSibling
    const attribute = next.getAttribute('src')
    data.map((val,index)=>{
      if(val.image === attribute){
        dispatch(home_action.remove(index))
      }
    })

  }
  return (
    <div className='cart'>
      <header>
        <h1>#cart</h1>
        <p>Add your coupon code and Save up to 70%!</p>
      </header>
        { data.length !== 0 &&<main>
          <hr />
        <div className='heading'>
          <span>REMOVE</span>
          <span>IMAGE</span>
          <span>PRODUCT</span>
          <span>PRICE</span>
          <span>QUANTITY</span>
          <span>SUBTOTAL</span>
        </div>
        <hr />
          {data.map((val,index)=>{
            return(
              <section  key={index}>
                <span className='click_icon' onClick={deletee} ><CancelOutlinedIcon /></span>
                <img src={val.image} alt="" />
                <span className='tag'>{val.product}</span>
                <span className='price'>${val.price}</span>
                <input className='quantity' number={index} onChange={changing} value={val.quantity} ></input>
                {/* <span className='quantity' number={index} onChange={changing}  >{val.quantity}</span> */}
                <span>${val.price* val.quantity}</span>
              </section>
            )
          })}
        </main>}
      <div className='coupon'>
        <aside className='one'>
          <h2>Apply Coupon</h2>
          <input type="text"  placeholder='Enter Your Coupon'/>
          <span className='button'>Apply</span>
        </aside>
        <aside className='two'>
          <h3>Cart Totals</h3>
          <table>
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td>${Total_value}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
              <th>Total</th>
              <th>$ {Total_value}</th>
              </tr>
            </tfoot>
          </table>
          <p className='check_out'>Proceed to check</p>
        </aside>
      </div>
    </div>
  )
}

export default Cart;