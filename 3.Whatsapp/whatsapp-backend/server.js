//importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
//app config
const app=express();
const port=process.env.PORT || 9000;

//middleware
app.use(express.json())

//DB config
mongoose.connect('mongodb+srv://Arvindh007:rockstar007@cluster0.bmxmp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
                ,{
                    // useCreateIndex: true,
                    // useNewUrlParser:true,
                    // useUnifiedTopology:true
                })


//?

//api routes
app.get('/',(req,res)=>res.status(200).send('hello world')); 
app.get('/messages/sync',(req,res)=> {
    const dbmessage=req.body
    Messages.find(dbmessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new',(req,res)=> {
    const dbmessage=req.body
    Messages.create(dbmessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

//listen
app.listen(port,()=>console.log(`Listening on Localhost:${port}`));