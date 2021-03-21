import logo from './logo.svg';
import './App.css';

import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';

import RegisterScreen from './Screen/RegisterScreen';
import CartScreen from './Screen/CartScreen';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import SigninScreen from './Screen/SigninScreen';
import { useSelector } from 'react-redux';
import ProductsScreen from './Screen/ProductsScreen';
import ShippingScreen from './Screen/ShippingScreen';
import PaymentScreen from './Screen/PaymentScreen';
import PlaceOrderScreen from './Screen/PlaceOrderScreen';

import CheckOutScreen  from './Screen/CheckOutScreen';




function App() {
  
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;


   const openMenu = () =>{
      document.querySelector(".sidebar").classList.add("open");

   }

   const closeMenu=()=>{
     document.querySelector(".sidebar").classList.remove("open");
   }




  return (
<BrowserRouter>
  
  
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <a href="/">azon</a>
        </div>
        <div className="header-links">
          <Link to="/Cart">cart</Link>
          {
          userInfo ? <Link to="/profile">{userInfo.name}</Link>:
          
           <Link to="/signin">Sign in</Link>
          }
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <Link  to="/category/Pants">Pants</Link>
          </li>
  
          <li>
            <Link  to="/category/Shirts">Shirts</Link>
          </li>
  
        </ul>
      </aside>
      <main className="main">
      
        <div className="content">

                <Route  path="/checkout" component={CheckOutScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen}  />
          <Route path="/shipping"  component={ShippingScreen}/>
        <Route  path="/payment"  component={PaymentScreen} />
           <Route path="/cart/:id?"    component={CartScreen} />
          <Route path="/product/:id"    component={ProductScreen} />
          <Route path="/signin"    component={SigninScreen} />
          <Route path="/register"    component={RegisterScreen} />  
          <Route path="/products" component={ProductsScreen} />
          <Route path="/"  exact={true} component={HomeScreen} />
          <Route path="/category/:id" component={HomeScreen} />
        </div>
  
      </main>
       <div className="footer" >
        All right reserved.
      </div>
    </div>
  
    
  
    </BrowserRouter> 
    
  );
}

export default App;
