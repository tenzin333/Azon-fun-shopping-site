import {useEffect, useState} from 'react';
import React, { Link } from 'react-router-dom';


import {useSelector,useDispatch} from 'react-redux';
import { deleteProduct, detailsProduct, listProducts, saveProduct } from '../actions/productActions';
import { signin } from '../actions/userActions';




function ProductsScreen(props){

    const [name,setName] = useState('');
    const [id,setId] = useState('');
    const [price,setPrice] = useState('');
    const [image,setImage] = useState('');
    const [brand,setBrand] = useState('');
    const [description,setDescription] = useState('');
    const [category,setCategory] = useState('');
    const [inStock,setInStock] = useState('');
    const [countInStock,setCountInStock] = useState('');
    const  productSave = useSelector(state=> state.productSave);
    const {loading:loadingSave,success: successSave,error:errorSave} = productSave;

    const  productDelete = useSelector(state=> state.productDelete);
    const {loading:loadingDelete,success: successDelete,error:errorDelete} = productDelete;
   
    const dispatch = useDispatch();

    const productList = useSelector(state=>state.productList);
    const {loading,products,error} = productList;

    const submitHandler = (e) => {
       
        e.preventDefault();
        
        dispatch(saveProduct({
        _id: id,
            name,price,brand,category,image,description,countInStock,inStock}));
    }


useEffect(()=>{
    
    dispatch(listProducts());   


  return ()=>{

            }; 

    },[successSave,successDelete]);


    const editAction = (product) =>{
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setBrand(product.brand);
        setCategory(product.category);
        setInStock(product.inStock);
        setCountInStock(product.countInStock);
        setDescription(product.description);
     
    }

    const delAction = (product) =>{
        dispatch(deleteProduct(product._id));
             
    } 
        
    return  loadingSave?<div>Loading...</div>:errorSave?<div>{errorSave}</div>:
    <div  className='col-2 '>
        <table >
            <thead>
                <tr>
                                <th>ID</th>
                                <th>NAME</th> 
                                <th>PRICE</th>
                                <th>Category</th> 
                                <th>Brand</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                products.map(product=>(
                <tr>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.brand}</td>
                                <td>
                                    <button  type="submit" onClick={()=>editAction(product)} >Edit</button>
                                    <button type="submit" onClick={()=>delAction(product)}>Delete</button>
                                </td>
                            </tr>
                                )) }
                           </tbody>
                 </table>
                    
                <form  onSubmit={submitHandler} >
                    <h2>Create Product</h2>

            <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} ></input>

                <label  htmlFor="price">Price</label>
                <input type="text" id="price" name="price"  value={price} onChange={(e)=> setPrice(e.target.value) } ></input>

                <label  htmlFor="image">Image</label>
                <input type="text" id="image" name="image" value={image}  onChange={(e)=> setImage(e.target.value) } ></input>


                <label  htmlFor="category">Category</label>
                <input type="text" id="category" name="category"   value={category} onChange={(e)=> setCategory(e.target.value) } ></input>
                
                <label  htmlFor="brand">brand</label>
                <input type="text" id="brand" name="brand" value={brand} onChange={(e)=> setBrand(e.target.value) } ></input>
                

                <label  htmlFor="inStock">Stock Availability</label>
                <input type="text" id="inStock" name="inStock" value={inStock} onChange={(e)=> setInStock(e.target.value) } ></input>
               
                <label  htmlFor="countInStock">Stocks Count</label>
                <input type="text" id="countInStock" name="countInStock" value={countInStock} onChange={(e)=> setCountInStock(e.target.value) } ></input>
                
                <label  htmlFor="description">Description</label>
                <input type="text" id="description" name="desciption" value={description} onChange={(e)=> setDescription(e.target.value) } ></input>
                
               
                <button type="submit">
                  {id ? 'Update' : 'Create'}
                </button>
               
            </form>

        </div>



}


export default ProductsScreen;