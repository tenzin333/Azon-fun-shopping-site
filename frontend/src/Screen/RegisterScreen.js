import {useEffect, useState} from 'react';
import React, { Link } from 'react-router-dom';


import {useSelector,useDispatch} from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import {register } from '../actions/userActions';




function RegisterScreen(props){

    const [repassword,setRePassword] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    
    const userRegister = useSelector(state=> state.userRegister);
    const {loading,userInfo,error} = userRegister;
    const dispatch = useDispatch();
    const redirect =  props.location.search ? props.location.search.split("=")[1]: "/";
    const submitHandler = (e) =>{
        e.preventDefault();

        dispatch(register(name,email,password));
    }


    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
  return ()=>{

            };

    },[userInfo])

        
    return  loading?<div>Loading...</div>:error?<div>{error}</div>:
    <div  className='container'>
                     <h1>Amazona</h1> 
                <form  onSubmit={submitHandler} >
                  <h2>Create Account</h2>

            <label htmlFor="name">Name</label>
            <input type="name" name="name" id="name"  onChange={(e)=>setName(e.target.value)} ></input>
<label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"  onChange={(e)=>setEmail(e.target.value)} ></input>

                <label  htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value) } ></input>
                <label  htmlFor="password">Confirm Password</label>
                <input type="password" id="repassword" name="repassword" onChange={(e)=> setRePassword(e.target.value) } ></input>
                <button type="submit"  >Register</button>
                 <label>Already have an account? <label><Link to={redirect == "/" ? "signin": "signin?redirect=" + redirect }>Create an account</Link></label></label>
               
            </form>

        </div>



}


export default RegisterScreen;