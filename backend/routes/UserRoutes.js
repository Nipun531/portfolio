const express=require("express");
const router=express.Router();

module.exports = (prisma) =>{
    
    router.get("/",(req,res)=>{
        res.json("hi");
    })

    return router
}