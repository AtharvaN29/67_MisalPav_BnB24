const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())

require('./db/config')
const Cart=require('./db/cart')
const User = require('./db/users')
const Producer = require('./db/producers')
const Product = require('./db/product')

app.use(cors())

//to get data from user database
app.get('/getuser', async (req, resp) => {
  let result = await User.find()
  resp.send(result)
})

//to post data to user database
app.post('/senduser', async (req, resp) => {
  let user = new User(req.body)
  let result = await user.save()
  resp.send(result)
})

//to post data to producer
app.post('/sendproducer', async (req, resp) => {
  let producer = new Producer(req.body)
  let result = await producer.save()
  resp.send(result)
})

//to get data from producer
app.get('/getproducer', async (req, resp) => {
  let result = await Producer.find()
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: 'NO DATA' })
  }
})

//to get product
app.get('/getproduct', async (req, resp) => {
  let result = await Product.find()
  if (result) {
    resp.send(result)
  } else {
    resp.send({ result: 'NO DATA' })
  }
})

//to add product
app.post('/sendproduct', async (req, resp) => {
  let product = new Product(req.body)
  let result = await product.save()
  resp.send(result)
})

//to login
app.post('/login',async (req,resp)=>{
    if(req.body.password && req.body.username){
        let user=await User.findOne(req.body).select('-password');
        if(user){
            resp.send(user);
        }
        else{
            resp.send({result:'N user found'})
        }
    }
    else{
        resp.send({result:'N user founded'}); 
    }
    
});

app.get('/getcart', async (req, resp) => {
    let result = await Cart.find()
    resp.send(result)
  })


  app.post('/cartpost',async (req,resp)=>{
    let cart=await new Cart(req.body);
    let result=await cart.save();
    resp.send(result);
  })
app.listen(5000)
