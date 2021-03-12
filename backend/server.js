import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'

dotenv.config()
connectDb()
const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Api Is Running")
})

app.listen(process.env.PORT ||5000)