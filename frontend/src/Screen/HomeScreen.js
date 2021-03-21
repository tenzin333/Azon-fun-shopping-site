import React from 'react-router-dom';

import {Link} from 'react-router-dom';
import { useEffect, useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { FaSistrix} from "react-icons/fa";


function HomeScreen(props){

  const [searchKeyword,setSearchKeyword]  = useState('');
  const [sortOrder,setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
   
    const productList = useSelector(state => state.productList);
    const {products,loading,error} = productList ;
    const dispatch = useDispatch();

    useEffect(()=>{ 
     
        dispatch(listProducts(category));

      return () =>{
        //

      };


    },[category]);


    const submitHandler = (e) => {
      e.preventDefault();

      dispatch(listProducts(category,searchKeyword,sortOrder));

    }

    
    const sortHandler = (e) => {
      setSortOrder(e.target.value);

      dispatch(listProducts(category,searchKeyword,sortOrder));

    }


     return  loading ? <div> Loading....</div>:
     error ? <div>{error}</div>:
     <div>
           <ul className="filter">
                <li>
                  <form onSubmut={submitHandler}>
                      <input  name="searchKeyword" onChange={(e)=>setSearchKeyword(e.target.value)} />
                    <button type="submit"><FaSistrix/></button>


                  </form>
                </li>

                <li>
                  Sort By{'  '}
                  <select name="sortOrder"   onChange={sortHandler}>
                    <option value=" ">Newest</option>
                    <option  value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                  </select>
                  </li>


           </ul>
      <ul className="products">
            {  
             products.map(product =>
             <li>
              <div className="product">
              <Link to={"/product/"+product._id} ><img className="product-image" src={product.image} alt="product" />  </Link>
                <div className="product-name">
                 
                  <Link to={"/product/"+product._id} >{product.name}</Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">$ {product.price}</div>
                <div className="product-rating">{product.rating} stars</div>
              </div>
            </li>
                
                
                )



            }
           </ul>
           </div>

    
     
}

export default HomeScreen;