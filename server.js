//Using Clusters to scale NodeJS Applciation

const cluster = require("node:cluster")
const os = require('os')
const express = require('express')

console.log(os.cpus().length);


if(cluster.isPrimary){
    for(let i=0;i<os.cpus().length;i++){
        cluster.fork()
    }
}else{

    const app = express();
    const PORT = 8000;

    app.listen(PORT, ()=>{
        console.log(`Server started at Port ${PORT}`);
    })

    app.get("/",(req,res)=>{
        // console.log("Hello from server");
        res.json({message : `Server handled with process PID ${process.pid}`})
    })
}