import express from 'express';

const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Api Is Running")
})

app.listen(process.env.PORT ||5000)