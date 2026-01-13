import studentModel from "../schemas/studentSchema.js";

const insertStudents = async() => {
    try {
        const student2 = new studentModel({ //student1 stores document object
            name: "Sam",
            rollNo: 1089,
            class:"11th",
            gender:"Male"
        });
        const student3 = new studentModel({ //student1 stores document object
            name: "Nancy",
            rollNo: 989,
            class:"10th",
            gender:"Female"
        });
        const student4 = new studentModel({ //student1 stores document object
            name: "Jency",
            rollNo: 789,
            class:"12th",
            gender:"Female"
        });
        // const result = await student1.save();
        const result = await studentModel.insertMany([student2, student3, student4]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

export default insertStudents;





