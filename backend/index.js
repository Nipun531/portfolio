const express=require("express");
const app=express();
const cors=require("cors");
const UserRoutes=require("./routes/UserRoutes")
const {PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient
const port=3000;

app.use(cors());
app.use(express.json());

app.use("/user",UserRoutes(prisma));


app.listen(port,()=>{
    console.log("server running on ",port);
});