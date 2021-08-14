'use strict';

const express=require('express');

const { foodcollection } = require('../models/index');
const router=express.Router();

router.get('/food',getAll);
router.get('/food/:id',getOne)
router.post('/food',addOne);
router.put('/food/:id',changeOne);
router.delete('/food/:id',deleteOne);

async function getAll(req , res){
 let food= await foodcollection.read();
 res.status(200).json(food);
};

async function getOne(req , res){
   let id=parseInt(req.params.id);
   let recivedItem=await foodcollection.read(id)
   res.status(200).json(recivedItem);
}
async function addOne(req , res){
   let new_food=req.body;
   console.log("####### food body" , new_food)
   let food = await foodcollection.create(new_food);
   res.status(200).json(food); 
}

async function deleteOne(req , res){
 let id = parseInt(req.params.id)   ;
 let deletedItem=await foodcollection.delete(id);
 res.status(200).json(deletedItem); 
}

async function changeOne(req , res){
   let id = parseInt(req.params.id)   ;
   console.log("##### put metohd ID" , id)
   let body_data=req.body;
   console.log("####### put method body data" , body_data);
  // let found=await foods.findOne({where : {id:id}});
  // console.log("####### found item" , found);
   let updatedItem=await foodcollection.update(id , body_data)
   res.status(200).json(updatedItem);  
}

module.exports=router



