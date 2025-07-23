import mongoose from "mongoose";

const crudSchema = new mongoose.Schema({
    name:'String',
    email:'String',
    age:'Number'
})

const CrudModel = mongoose.model("crud" , crudSchema)

 export default CrudModel