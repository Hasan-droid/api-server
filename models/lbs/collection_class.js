'use strict'

class Collection{

    constructor(model){
        this.model=model;
    }

    async read(id){
        try{
            let record=null;
            if(id){
               record=await this.model.findOne({where :{id:id}});
            }else{
               record=await this.model.findAll();
            }
            return record;

        }catch(error){
           console.log("Catch error in READ records on ",this.model.name,`where id=${id}`);
        }

        
    }

    async create(obj){
        try{
           return await this.model.create(obj);
        }catch(error){
           console.log('can not CREATE a new record',this.model.name);
        }

        
    }

    async delete(id){
        if(!id)
        throw new Error('Invalid or not provided id , model' , this.model.name)
        try{
            let deletedItem=await this.model.destroy({where:{id}});
            return deletedItem;

        }catch(error){
            console.error('can not DELETE item on model', this.model.name,`where id is=${id}`)

        }

        
    }

    async update(id , obj){
        try{
            let currentRecord=await this.model.findOne({where:{id}})
            let updatedRecord=await currentRecord.update(obj);
            return updatedRecord;

        }catch(error){

            console.log('error UPDATE the record for model :', this.model.name,`where id is ${id}`)

        }

        
    }


    
  
}

module.exports=Collection;