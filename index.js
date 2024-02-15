
// const express=require('express');
// const app=express();


// app.listen(8001,()=>{
//     console.log("Application is running successfully ")
// })

const express=require('express');
const app=express();

//load config from env file to proccess object
require("dotenv").config();
const PORT=process.env.PORT || 4000;

//need middleware to parse json request body
app.use(express.json());


//import routes for TODO API
const todoRoutes=require("./routes/todos");

//mount the todo API routes
app.use("/api/v1",todoRoutes);

//start the server
app.listen(PORT,()=>{
    console.log(`server startet at ${PORT} `);
})

//connect to dataBase
const dbConnect=require("./config/dataBase");
dbConnect();

//default Route
app.get("/",(req,res)=>{
    res.send(`<h1>This is home page</h1>`);
})