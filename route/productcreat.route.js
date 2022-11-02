const { authorisation, Authentication } = require("../middleware/Auth.middelware")

Productcreate.post("/product/create",Authentication,authorisation(["seller"]),(req,res)=>{

    res.send("login again...")
})
module.exports={Productcreate}