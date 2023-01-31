import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Blog from './Components/Blog';
import Shop from './Components/Shop';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/blog' element={<Blog/>}/>
        <Route  path='/shop' element={<Shop/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
