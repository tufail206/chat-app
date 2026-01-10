import dotEnv from "dotenv"
dotEnv.config()
import express from 'express'
import cors from 'cors'
import {createServer} from 'http'
import connectDb from "./utils/db.js"
import user_route from "./routes/user.routes.js"
import errorMiddleware from "./middlewares/error.middleware.js"
const app=express()
const server=createServer()
const PORT = process.env.PORT;
app.use(express.json())

app.use("/api/v1/",user_route)

app.use(errorMiddleware);
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log('mongodb connected..')
        console.log(`app is running on port ${PORT}`)
    })
    
}).catch((e)=>{
    console.log("connection error",e)
})


