import logo from './img/logo.png'
import { NavLink } from 'react-router-dom'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import FormatIndentDecreaseOutlinedIcon from '@mui/icons-material/FormatIndentDecreaseOutlined';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { home_action } from './store';
const Header = () => {
  const url = window.location.href
  const dispatch = useDispatch()
  const displayy= useSelector((val)=>{
    return val.Home.header_nav
  })
  const width = window.screen.availWidth

  const right = useSelector((val)=>{
    if (width > 500){
      return val.Home.right
    }
    else{
      return 0 
    }
  })
  useEffect(()=>{
    if(url.includes('/shop')){
      document.getElementsByClassName('shop')[0].setAttribute('id','header')
    }
    else if (url.includes('/blog')){
      document.getElementsByClassName('blog')[0].setAttribute('id','header')
    }
    else if (url.includes('/about')){
      document.getElementsByClassName('about')[0].setAttribute('id','header')
    }
    else if (url.includes('/contact')){
      document.getElementsByClassName('contact')[0].setAttribute('id','header')
    }
    else if (url.includes('/cart')){
      document.getElementsByClassName('twice')[0].setAttribute('id','header')
    }
    else{
      document.getElementsByClassName('home')[0].setAttribute('id','header')
    }
    if(window.screen.availWidth < '500'){
      dispatch(home_action.changeNav('none'))
    }
  },[url])

  
  function click(e){
    const data = e.target
    document.getElementsByClassName('twice')[0].removeAttribute('id')
    
    data.setAttribute('id','header')
    let next = data.nextElementSibling
    while( next !== null ){
      next.removeAttribute('id' )
      next= next.nextElementSibling
    }
    let previous = data.previousElementSibling
    
    
    while(previous !== null){
      previous.removeAttribute('id')
      previous= previous.previousElementSibling
    }
    if( window.screen.availWidth < 500){
      dispatch(home_action.changeNav('none'))
    }
    else{

    }
    
  }
  function click2(e){
    e.target.parentElement.setAttribute('id','header')
    Array.from(document.getElementsByClassName('air')).map((val)=>{
      val.removeAttribute('id')
    })
    
  }
  return (
    <header>
        <img src={logo} alt="" />
        <nav style={{display:displayy,right:right}}>
          <ClearOutlinedIcon onClick={()=>{
            dispatch(home_action.changeNav('none'))
            dispatch(home_action.changeRight('-70vw'))
          }} className='nav_hide'/>
            <NavLink className='air home'  onClick={click} to='/'>Home</NavLink>
            <NavLink className='air shop' onClick={click} to='/shop'>Shop</NavLink>
            <NavLink className='air blog' onClick={click} to='/blog'>Blog</NavLink>
            <NavLink  className='air about' onClick={click} to='/about'>About</NavLink>
            <NavLink  className='air contact' onClick={click} to='/contact'>Contact</NavLink>
        </nav>
        <NavLink  to='/cart' className='link'><span className='twice' onClick={click2}><ShoppingBagOutlinedIcon className='icon'/></span></NavLink>
        <FormatIndentDecreaseOutlinedIcon onClick={()=>{
          dispatch(home_action.changeNav('flex'))
          dispatch(home_action.changeRight('0vw'))
        }} className='hide'/>
    </header>
  )
}

export default Header