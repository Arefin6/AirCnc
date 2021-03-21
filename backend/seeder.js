import dotenv from 'dotenv'
import connectDB from './config/db.js'
import homes from './data/homes.js';
import Homes from "./models/homeModel.js";

dotenv.config()

connectDB()

const importData = async () =>{

     try {
        await Homes.deleteMany() 

        
        await Homes.insertMany(homes)

        console.log('data Imported')
        
        process.exit()

     } catch (error) {
         console.log(`${error}`)
         process.exit(1)
     }
}

const destroyData = async () =>{

    try {
       await Homes.deleteMany() 
       

       console.log('data destroyed')
       
       process.exit()

    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

 if(process.argv[2] === '-d'){
     destroyData()
 }
 else{
     importData()
 }