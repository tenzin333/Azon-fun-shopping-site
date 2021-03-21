import {useEffect, useState} from 'react';
import React, { Link } from 'react-router-dom';


import {useSelector,useDispatch} from 'react-redux';
import { detailsProduct } from '../actions/productActions';

import {savePayment, saveShipping} from '../actions/cartActions';
import CheckoutSteps from '../component/CheckoutSteps';



function PaymentScreen(props){

    const  [paymentMethod,setPaymentMethod] = useState('');    
    const dispatch = useDispatch();
    const redirect =  props.location.search ? props.location.search.split("=")[1]: "/";
    
    const submitHandler = (e) =>{
        e.preventDefault();

        dispatch(savePayment({paymentMethod}));
        props.history.push('placeorder');
    }


    useEffect(()=>{
       
  return ()=>{

            };

    },[ ])

        
    return <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>
    
    <div  className='container'>
                    
                <form  onSubmit={submitHandler} >
                    <ul className="form-action">
                        <li>
                            <h2>Payment</h2>
                        </li>

                        <li>
                            <div >
                                <input type="radio" name="paymentMethod" id="paymentMethod" value ="paypal"  onChange={(e)=> setPaymentMethod(e.target.value)}  /> 
                <label htmlFor="paymentMethod" >Paypal</label>
                            </div>
                            
                        </li>

                        <li>
                            <button  >Continue</button>
                        </li>

                    </ul>
                    <div>
                 </div>
               
               
            </form>

        </div>
        </div>



}


export default PaymentScreen;