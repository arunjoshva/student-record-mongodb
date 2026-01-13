import mongoose from "mongoose";

//Schema
const subjectSchema = new mongoose.Schema({
    name:String,
    maxMark:Number
});

//Model
const subjectModel = mongoose.model("Subject", subjectSchema);

export default subjectModel;