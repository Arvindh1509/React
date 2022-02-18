import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbcards.js';
import Cors from 'cors';
//appconfig
const app=express();
const port=process.env.PORT || 8000
const connection_url='mongodb+srv://Arvindh007:rockstar007@cluster0.nwodq.mongodb.net/tinderDatabase?retryWrites=true&w=majority'
//middlewares
app.use(express.json())
app.use(Cors());
 
//dbconfig
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
});
//apiendpoints
app.get('/',(req,res)=>res.status(200).send('hello programmer'));
app.post('/tinder/card',(req,res)=>{
    const dbCard=req.body;

    Cards.create(dbCard, (er,data)=>{
        if(err){
            res.status(500).send(er)
        }else{
            res.status(201).send(data)
        }
    })
});
app.get('/tinder/card',(req,res)=>{
    

    Cards.find( (err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
});
//listener
app.listen(port,()=>console.log(`listening on localhost: ${port}`));

