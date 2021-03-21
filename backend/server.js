import  express from 'express';
//import data from './data';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import config from './config';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config();


const mongodbUrl = config.MONGODB_URL;



mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useCreateIndex:true
}).catch(error=> console.log(error.reason));


app.use("/api/users",userRoute);



app.use("/api/products/",productRoute);


// app.get('/api/products/:id',(req,res)=>{
  
//     const productId = req.params.id;

//     const product = data.products.find(x => x.id === productId);
//     if(product){
//       res.send(product);
//     }
//     else{
//       res.status(404).send({msg: "Product Not Found"});
//     }
    

  
// });



// app.get('/api/products/',(req,res)=>{
//   console.log('homescreen api called');
//     res.send(data.products);
// });






app.listen(4000,()=> {
    console.log("server started at http://localhost:4000")
});