const model = require('../models/model.js');
const mongoose = require('mongoose');

module.exports = function(app){
	app.post('/api/users',function(req,res){
        const newUser = model({
            name:req.body.name,
            email:req.body.email,
            age:req.body.age
        });
        newUser.save(function(err,user){
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(201).send(user);
            }
        });
    });

    app.put('/api/users',function(req,res){
        model.findById(req.body._id,function(err,userRes){
            if(err){
                   res.status(404).send(err);
            }
            else{
                userRes.updateOne(req.body,function(err,success){
                    if(err){
                        res.status(500).send(err);
                    }
                    else{
                        res.status(201).send({message:"Usuário atualizado com sucesso!"});
                    }
                });
            }
        });
    });

    app.delete('/api/users/:id',function(req,res){
        model.deleteOne({_id:req.params.id},function(err,removeRes){
            if(err){
                console.log(err);
                res.status(500).send(err);
            }else{
                res.status(200).send({message:'Usuário deletado com sucesso!'});
            }
    
        });
    });
    
}