'use strict';

const express=require('express');

const { clothecollection } = require('../models/index');
const router=express.Router();

router.get('/clothe',getAll);
router.get('/clothe/:id',getOne)
router.post('/clothe',addOne);
router.put('/clothe/:id',changeOne);
router.delete('/clothe/:id',deleteOne);

async function getAll(req , res){
 let clothe= await clothecollection.read();
 res.status(200).json(clothe);
}

async function getOne(req , res){
   let id=parseInt(req.params.id);
   let recivedItem=await clothecollection.read(id);
   res.status(200).json(recivedItem);
}

async function addOne(req , res){
   let new_clothe=req.body;
   let clothe = await clothecollection.create(new_clothe);
   res.status(200).json(clothe); 
}

async function deleteOne(req , res){
 let id = parseInt(req.params.id)   ;
 let deletedItem=await clothecollection.delete(id);
 res.status(200).json(deletedItem); 
}

async function changeOne(req , res){
   let id =parseInt(req.params.id);
   let body=req.body;
   // let found=await clothes.findOne({where : {id:id}});
   // let updatedItem=await found.update(body);
  let updatedItem=await clothecollection.update(id,body);
   res.status(200).json(updatedItem);  
}

module.exports=router



