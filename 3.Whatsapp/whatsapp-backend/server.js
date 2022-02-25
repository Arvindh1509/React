//importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher';
//app config
const app=express();
const port=process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1353258",
    key: "a44e8c159a4eabd3acf6",
    secret: "a23b960b963b25cfa1ad",
    cluster: "ap2",
    useTLS: true
  });

//middleware
app.use(express.json())

//DB config
mongoose.connect('mongodb+srv://Arvindh007:rockstar007@cluster0.bmxmp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
                ,{
                    // useCreateIndex: true,
                    // useNewUrlParser:true,
                    // useUnifiedTopology:true
                })

const db=mongoose.connection

db.once('open',()=>{
    console.log("db is connected");

    const msgCollection=db.collection("messagecontents");
    const changeStream=msgCollection.watch();

    changeStream.on('change',(change)=>{
        console.log(change);
    })
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