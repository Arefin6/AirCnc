import  mongoose  from "mongoose";

const homeSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    reviews:{
        type:Number,
        required:true
    },

})

 const Homes = mongoose.model('Homes',homeSchema)

 export default Homes;