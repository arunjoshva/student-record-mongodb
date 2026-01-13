import mongoose from "mongoose";

//Schema
const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    rollNo:{type:Number, required:true, unique:true},
    class:String,
    gender:String
});

//Model
const studentModel = mongoose.model("Student", studentSchema);

export default studentModel;