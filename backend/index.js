const express=require('express');
const app=express();
const cors=require('cors');

app.use(express.json({ limit: '10mb' }));


require('./db/config');
const User=require('./db/users');
const Producer=require('./db/producers');
const Product =require('./db/product');

app.use(cors());

//to get data from user database
app.get('/getuser',async (req,resp)=>{
    let result=await User.find();
    resp.send(result);
})

//to post data to user database
app.post('/senduser',async (req,resp)=>{
    let user=new User(req.body);
    let result=await user.save();
    resp.send(result);
})

//to post data to producer
app.post('/sendproducer',async (req,resp)=>{
    let producer=new Producer(req.body);
    let result=await producer.save();
    resp.send(result);
})


//to get data from producer 
app.get('/getproducer',async (req,resp)=>{
    let result=await Producer.find();
    if(result){
        resp.send(result);
    }
    else{
        resp.send({result:"NO DATA"});
    }
})

//to get product
app.get('/getproduct',async (req,resp)=>{
    let result=await Product.find();
    if(result){
        resp.send(result);
    }
    else{
        resp.send({result:"NO DATA"});
    }
});


//to add product 
app.post('/sendproduct',async (req,resp)=>{
    let product=new Product(req.body);
    let result=await product.save();
    resp.send(result);
})


//aayush

// app.post('/addProduct', fetchuser, async (req, res) => {

//     const { name, price, category, company } = req.body;
//     let userid = req.user.id;
//     const image = req.body.image.toString();
//     try {
//         Products.create({ user: userid, name: name, price: price, category: category, company: company, image: image });
//         res.status(200).send({ Status: "ok" });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server error");
//     }
// });
app.listen(5000);