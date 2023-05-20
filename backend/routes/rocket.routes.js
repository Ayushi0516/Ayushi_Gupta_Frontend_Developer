const {Router}=require("express")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const rocketController=Router()


rocketController.get("/",async(req,res)=>{
    try{
        const data=await fetch("https://api.spacexdata.com/v3/launches")
        const ans=await data.json()
        res.send({"data":ans})
    }
    catch(err){
        res.send({"msg":"invalid request"})
        console.log(err)
    }
})

module.exports={
    rocketController
}