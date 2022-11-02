const { authorisation, Authentication } = require("../middleware/Auth.middelware")
// Authentication and authorization both requires
Productcreate.post("/product/create",Authentication,authorisation(["seller"]),(req,res)=>{

    res.send("login again...")
})
module.exports={Productcreate}