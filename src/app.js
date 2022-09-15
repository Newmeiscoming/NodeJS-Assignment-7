const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here

app.get("/mario", async (req,res)=>{
    try{
        const resultArray = await marioModel.find();
        res.status(200).json({result:resultArray})
    }catch(err){
        res.status(404).json({result:err});
    }
});

app.get("/mario/:id", async (req,res)=>{
    try{
        
        const id = req.params.id;
        const resultArray = await marioModel.findById({_id:id});
        res.status(200).json({result:resultArray})
    }catch(err){
        res.status(404).json({
            message:"Id not found"
        });
    }
});

app.post("/mario",async (req,res)=>{
    try{
        const data = await marioModel.create(req.body);
        console.log("Data created successfully");
        res.status(201).json({result:data});
    }catch(err){
        console.log(err);
        res.status(400).json({message:err});
    }
});

app.patch("/mario/:id",async (req,res)=>{
    try{
        const update = await marioModel.findByIdAndUpdate(
            {_id:req.params.id},
            req.body,
            {new:true})

            res.status(200).json({
                result:update
            })
    }catch(err){
        console.log(err);
        res.status(400).json({message:"Id not found"});
    }
})

app.delete("/mario/:id", async (req,res)=>{
    try{
        const id = req.params.id;
        const deleted = await marioModel.findByIdAndDelete({_id:id});
        console.log(deleted);
        res.status(200).json({message:"Character deleted"});
    }catch(err){
        console.log(err);
        res.status(400).json({message:"Id not find"})
    }
})



module.exports = app;