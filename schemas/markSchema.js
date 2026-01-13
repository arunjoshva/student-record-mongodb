import mongoose from "mongoose";

//Schema
const markSchema = new mongoose.Schema({
    studentId:{type:mongoose.Schema.Types.ObjectId, ref:"Student"},// refers to Student Model
    subjectId:{type:mongoose.Schema.Types.ObjectId, ref:"Subject"},// refers to Subject Model
    mark:{type:Number, min:0, max:100},
    examDate: Date
});

//Model
const markModel = mongoose.model("Mark", markSchema);

export default markModel;