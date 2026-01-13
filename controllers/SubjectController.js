import subjectModel from "../schemas/subjectSchema.js";

const insertSubjects = async() => {
    try {
        const subject1 = new subjectModel({
            name:"Tamil",
            maxMark:100
        });
        const subject2 = new subjectModel({
            name:"English",
            maxMark:100
        });
        const subject3 = new subjectModel({
            name:"Maths",
            maxMark:100
        });
        const subject4 = new subjectModel({
            name:"Science",
            maxMark:100
        });
        const subject5 = new subjectModel({
            name:"Social",
            maxMark:100
        });
        const result = await subjectModel.insertMany([subject1, subject2, subject3, subject4, subject5]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

export default insertSubjects;




