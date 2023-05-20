  const express=require("express")
  const {userController}=require("./routes/user.routes")
const {connection}=require("./config/db")
  const app=express()
  const PORT=8080;
  app.use(express.json())

  app.get("/",(req,res)=>{
    res.send("homepage")
  })
  app.use("/user",userController)
  app.listen(PORT,async()=>{
    try{
     await connection;
     console.log("connected to db")
    }
    catch(error){
        console.log(error)
    }
    console.log(`Listening on PORT ${PORT}`)
  })