import  mongoose  from "mongoose"

const connectDb = async () =>{
    try {
        const conn = await mongoose.connect('mongodb+srv://arefin6:01715250516arefin@cluster0.8pkoh.mongodb.net/AirCnc?retryWrites=true&w=majority',{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`Mongo Db Connected ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error ${error.message}`)
        process.exit(1)
    }

}


export default connectDb;