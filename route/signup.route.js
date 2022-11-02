const {Router}=require("express")

const SignupRouter=Router()
SignupRouter.post("/signup",(req,res)=>{
    res.send("Account created")
})
module.exports={SignupRouter}