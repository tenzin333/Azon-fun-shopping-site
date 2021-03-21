import {useEffect, useState} from 'react';
import React from 'react-router-dom';


import {useSelector,useDispatch} from 'react-redux';
import { detailsProduct } from '../actions/productActions';




function ProductScreen(props){
    const [qty,setQty] = useState(1);
    const productDetails =  useSelector(state => state.productDetails);
    const {product,loading,error} = productDetails;
    const dispatch = useDispatch();

    useEffect(()=>{
 

        dispatch(detailsProduct(props.match.params.id));
            return ()=>{

            };

    },[])

const heandleAddToCart = ()=>{
     
    props.history.push("/cart/"+props.match.params.id+"?qty="+qty);
}


return  loading?<div>Loading...</div>: error?<div>{error}</div>: <div class="grid3c">
    <ul className="product-img">
             <li>
          <div className="product">
            <img  src={product.image} alt="product" />
        </div>
        </li>
       </ul>

     <div class="product-details">
         <ul>
            <li>
                <div > {product.name}</div>
            <div >Product Brand : {product.brand}</div>
            <div >Price: $ {product.price}</div>
           
            <div > Rating : {product.rating} stars</div>
            <div >Description:{product.description}</div>
             </li>    
         </ul>     
    </div>   



    <div class="product-action">
        <div >Amount : $ {product.price} </div>
        <div>Status : {product.inStock>0?"In Stock":"Out of Stock" }</div>
        <div >Qty <select value = {qty} onChange={(e)=> {setQty(e.target.value)}}>
                {
                   [...Array(product.countInStock).keys()].map(x=>
                    <option key= {x+1}  value ={x+1}>{x+1}</option>
                    )

                    }
            </select>
        </div>
        {product.countInStock>0?
        <button onClick={heandleAddToCart} >add to Cart</button> : <button onClick={heandleAddToCart} disabled >add to Cart</button> 
        }
        


    </div>   


</div>

    }
    
   



export default ProductScreen;