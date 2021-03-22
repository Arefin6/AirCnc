import asyncHandler from 'express-async-handler';
import Homes from '../models/homeModel.js';

const getAllHomes = asyncHandler(async(req,res)=>{
    const allHomes = await Homes.find({});
    if(allHomes){
        res.send(allHomes)
    }
    else{
        res.json({
            message:"Not Found"})
    }
})

export {getAllHomes}