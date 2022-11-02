const {Router}=require("express")

const ProductRouter=Router()
ProductRouter.post("/product",(req,res)=>{
    res.send("Products")
})
module.exports={ProductRouter}