//import the model
const Todo=require('../models/Todo');

//define Route handler(database intraction should be in asyc form)
exports.createTodo=async(req,res)=>{
    try{
        //Extract title and description from request body
        const{title,description}=req.body;

        //create new Todo Obj and insert in DB
        const response=await Todo.create({title,description})

        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created Successfully"
            }
        )
    }

    
    catch(err) {
        console.error(err);
        res.status(500).json({
            success:false,
            data:"Internal Server error",
            message:e.message,
        })

    }
}