const express = require('express');

const app = express();

const products = require('./Routes/products');
const orders = require('./Routes/orders');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});

app.use('/products',products);
app.use('/orders',orders);

app.use((req,res,next)=>{
    const error = new Error('not found');
    error.status = 404;
    next(error);
})

app.use((err,req,res,next)=>{
    
    res.status(err.status||500);
    res.json({
        message: "not found",
        error: err.message
    })
})
module.exports = app;