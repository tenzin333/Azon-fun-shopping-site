import { useEffect } from 'react';
import React, { Link } from 'react-router-dom';

function CheckOutScreen(props){
   


    useEffect(() =>{
        
    

      },[])

      return <div>
          <div className="checkout-message">
              <div>
                   <h4>Order Successful !!!</h4>  

                   <hr />
                   
                <p>Thank you for ordering.Your package will be delivered soon.</p>

              </div>
              <Link to="/" >Back to home</Link>
               
          </div>
                

      </div>

}

export default CheckOutScreen;