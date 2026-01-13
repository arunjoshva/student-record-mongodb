import markModel from "../schemas/markSchema.js";
import studentModel from "../schemas/studentSchema.js";
import subjectModel from "../schemas/subjectSchema.js";

const insertMarks = async() => {
    try {
        // 1. Find students
        const arun = await studentModel.findOne({name:"Arun"});
        const sam = await studentModel.findOne({name:"Sam"});
        const nancy = await studentModel.findOne({name:"Nancy"});
        const jency = await studentModel.findOne({name:"Jency"});

         // 2. Find subjects
         const tamil = await subjectModel.findOne({name:"Tamil"});
         const english = await subjectModel.findOne({name:"English"});
         const maths = await subjectModel.findOne({name:"Maths"});
         const science = await subjectModel.findOne({name:"Science"});
         const social = await subjectModel.findOne({name:"Social"});

         // 3️. Create mark documents
         const mark1 = new markModel({
            studentId: arun._id,
            subjectId: tamil._id,
            mark:95,
            examDate: new Date("2025-03-01")
         });

         const mark2 = new markModel({
            studentId: arun._id,
            subjectId: english._id,
            mark:91,
            examDate: new Date("2025-03-02")
         });

         const mark3 = new markModel({
            studentId: sam._id,
            subjectId: maths._id,
            mark:100,
            examDate: new Date("2025-03-03")
         });

         const mark4 = new markModel({
            studentId: nancy._id,
            subjectId: science._id,
            mark:98,
            examDate: new Date("2025-03-01")
         });

         const mark5 = new markModel({
            studentId: jency._id,
            subjectId: social._id,
            mark:97,
            examDate: new Date("2025-03-01")
         });

         const result = await markModel.insertMany([mark1, mark2, mark3, mark4, mark5]);
         console.log(result);
    } catch (error) {
        console.log(error);
    }
};

export default insertMarks;


