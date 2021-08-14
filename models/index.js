'use strict';

const POSTGRES_URL="postgres://localhost:5432/basicdatabase";
const{Sequelize , DataTypes}=require('sequelize');
const food_model=require('./food.model');
const clothes_model=require('./clothes.model');
const Collection=require('./lbs/collection_class');

let sql=new Sequelize(POSTGRES_URL , {});

const food_schema=food_model(sql , DataTypes);
const clothes_schema=clothes_model(sql , DataTypes);

const foodCollection=new Collection(food_schema);
const clothesCollection=new Collection(clothes_schema);

module.exports={
   foodcollection:foodCollection,
   clothecollection:clothesCollection,
  
    db:sql
}