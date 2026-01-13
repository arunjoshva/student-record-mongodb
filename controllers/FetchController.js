import markModel from "../schemas/markSchema.js";
import studentModel from "../schemas/studentSchema.js";

export const getAllStudents = async() => {
    const students = await studentModel.find();
    console.log("Students:", students);
};

export const getAllMarks = async() => {
    const marks = await markModel.find();
    console.log("Marks:", marks);  
};