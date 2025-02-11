import express from "express"
import dotenv from "dotenv"; 
import connectDB from "./database/db.js"

dotenv.config();

const app = express();

const port = Number(process.env.PORT) || 3000;

app.get("/" , (req,res)=>{

    res.send("hello")
})

app.listen(port , ()=>{
    console.log(`server is runnning on http://localhost:${port} 🟢`);
    connectDB();

    
});