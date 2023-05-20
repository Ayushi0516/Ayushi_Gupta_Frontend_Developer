  const express=require("express")

  const app=express()
  const PORT=8080;
  app.use(express.json())

  app.get("/",(req,res)=>{
    res.send("homepage")
  })

  app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
  })