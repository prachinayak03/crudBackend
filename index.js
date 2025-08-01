import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import CrudModel from './model/Crudmodel.js'


const app = express()

const port = process.env.PORT || 3000


const connectData = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017' , {dbName:'Newcrud'})
        console.log('Database connected successfully')
    }
    catch(error){
        console.log(error)
    }
}
connectData()


//----//
app.use(cors())
app.use(express.json())
//====Api ====///

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
 




app.listen(port , ()=>{
    console.log(`server is listening at https://localhost:${port}`)
})
