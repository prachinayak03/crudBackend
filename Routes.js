import CrudModel from "./model/Crudmodel";
 import React from 'react'
 
 const Routes = () => {
   return (
    
     app.get('/getUser/:id',(req , res )=>{
    const id = req.params.id;
    CrudModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/' , (req,res)=>{
    CrudModel.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
app.put ('/updateUser/:id',(req,res)=>{
const id = req.params.id;
CrudModel.findByIdAndUpdate({_id: id} , {
    name: req.body.name ,
    email: req.body.email ,
    age: req.body.age})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    CrudModel.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})
app.post ('/createUser',(req,res)=>{
    CrudModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
 
   )
 }
 
 export default Routes
 

