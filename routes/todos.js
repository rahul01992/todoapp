const express=require("express");

const router=express.Router();

//import controlller
const{createTodo}=require("../controllers/createTodo");
const{getTodo,getTodoById}=require("../controllers/getTodo");
const {updateTodo}=require("../controllers/UpdateTodo");
const {deleteTodo}=require("../controllers/deleteTodo");

//define API routes (Map the path to the controller)
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports=router;