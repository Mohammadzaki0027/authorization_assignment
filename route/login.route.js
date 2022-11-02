const {Router}=require("express")

const LoginRouter=Router()
LoginRouter.post("/login",(req,res)=>{
    res.send("Account created")
})
module.exports={LoginRouter}