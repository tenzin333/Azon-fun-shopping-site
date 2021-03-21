import {useEffect, useState} from 'react';
import React, { Link } from 'react-router-dom';


import {useSelector,useDispatch} from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import { signin } from '../actions/userActions';




function SigninScreen(props){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const userSignin = useSelector(state=> state.userSignin);
    const {loading,userInfo,error} = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:"/";

    const submitHandler = (e) =>{
        e.preventDefault();

        dispatch(signin(email,password));
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
                    <h2>Sign in</h2>

            <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"  onChange={(e)=>setEmail(e.target.value)} ></input>

                <label  htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value) } ></input>
                <button type="submit"  >Submit</button>
                <label><Link to={redirect == "/" ? "register": "register?redirect=" + redirect }>Create an account</Link></label>
                <label>Having trouble Signing in? <Link>Forgot password.</Link></label> 
            </form>

        </div>



}


export default SigninScreen;