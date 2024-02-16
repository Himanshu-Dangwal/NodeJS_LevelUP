const express = require('express')
const dotenv = require('dotenv')
const cors = require("cors")

const app = express();
app.use(cors());
dotenv.config();

const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`Server started at Port ${PORT}`);
})

app.get("/",(req,res)=>{
    console.log("Hello from server");
})