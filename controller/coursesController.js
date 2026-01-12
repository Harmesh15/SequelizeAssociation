const { where } = require("sequelize");
const Courses = require("../models/courses");
const Student = require("../models/student");

const addCourses = async (req,res)=>{
       
       try{
          
         const {name} = req.body;
         const courses = await Courses.create({'name': name});
         console.log(courses);

          res.status(201).send(courses);
       }catch(error){
     
         res.status(500).json({'error':error.message})
       }
}


const addStudentToCourses = async (req,res)=>{
    try{

        const {studentId,coursesId} = req.body;
        // const student = await Student.findByPk(studentId);


       const student = await Student.findByPk(studentId);

              if(!student) {
             return res.status(404).json({ error: "Student not found" });
         }

        const courses = await Courses.findAll({
            where:{
                id:coursesId
            }
        })
        
   await student.addCourses(courses);

        const updatedStudent = await Student.findByPk(studentId,{include:Courses});
        res.status(200).json(updatedStudent);

    }catch(error){
           res.status(500).json({'error':error.message})
    }

}


module.exports = {
    addCourses,
    addStudentToCourses
};