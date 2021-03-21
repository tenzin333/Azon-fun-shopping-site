import {useEffect, useState} from 'react';
import React, { Link } from 'react-router-dom';


import {useSelector,useDispatch} from 'react-redux';
import { detailsProduct } from '../actions/productActions';

import {saveShipping} from '../actions/cartActions';
import CheckoutSteps from '../component/CheckoutSteps';



function ShippingScreen(props){

    const [address,setAddress] = useState('');
    const [postalCode,setPostCode] = useState('');
    const  [city,setCity] =useState('');
    const [country,setCountry] = useState('');

    
    const dispatch = useDispatch();
    const redirect =  props.location.search ? props.location.search.split("=")[1]: "/";
    
    const submitHandler = (e) =>{
        e.preventDefault();

        dispatch(saveShipping({address,postalCode,city,country}));
        props.history.push('payment');
    }


    useEffect(()=>{
       
  return ()=>{

            };

    },[ ])

        
    return <div>
        <CheckoutSteps step1 step2></CheckoutSteps>
    
    <div  className='container'>
                    
                <form  onSubmit={submitHandler} >
                  <h2>Shipping</h2>

            <label htmlFor="address">Name</label>
            <input type="address" name="address" id="address"  onChange={(e)=>setAddress(e.target.value)} ></input>

            <label htmlFor="city">City</label>
            <input type="city" name="city" id="city"  onChange={(e)=>setCity(e.target.value)} ></input>


            <label htmlFor="postalCode">Postal Code</label>
            <input type="postalCode" name="postalCode" id="postalCode"  onChange={(e)=>setPostCode(e.target.value)} ></input>

            <label htmlFor="Country">Country</label>
            <input type="country" name="country" id="country"  onChange={(e)=>setCountry(e.target.value)} ></input>


                <button type="submit">Continue</button>
                 <label>Already have an account? <label><Link to={redirect == "/" ? "signin": "signin?redirect=" + redirect }>Create an account</Link></label></label>
               
            </form>

        </div>
        </div>



}


export default ShippingScreen;