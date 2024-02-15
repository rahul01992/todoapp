
const mongoose=require('mongoose');

// jo v apne env k ander define kiya hai vo procces object k ander a jayega
require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("DB connected")})
    .catch((e)=>{console.log("Issue in DB connection");
    console.error(e.message);
    process.exit(1);
});
}
module.exports=dbConnect; 