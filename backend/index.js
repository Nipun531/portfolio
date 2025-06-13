const express=require("express");
const app=express();
const cors=require("cors");
const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient
const port=3000;

app.use(cors());
app.use(express.json());


app.listen(port,()=>{
    console.log("server running on ",port);
});