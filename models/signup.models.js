const mongoose=require("mongoose")
const signupschema=({
    email:{type:String,required:true},
    password:{type:String,required:true}
})
const SignupModel=mongoose.model("user",signupschema)

module.exports={SignupModel}