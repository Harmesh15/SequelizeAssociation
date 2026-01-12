const Student = require("../models/student");
const IdentityCard = require("../models/identity");

// const addEntries = async (req,res)=>{
//     try{
//         const {name,email} = req.body;
//         const firstTable = FirstTable.create({
//             name:name,
//             email:email
//         })
      
//         res.status(201).send(`entries added with name ${name}`);
//     }catch(err){
//         console.log(err);
//         res.status(500).send("entries not created");
//     }

// }


const addValuesToSecTable = async (req,res)=>{
    try{
        const student = await Student.create(req.body.student)
        const idCard = await IdentityCard.create({
            ...req.body.IdentityCard,
            StudentId:student.id
        })

        res.status(201).json({student,idCard});

    }catch(error){
        console.log(error);
        res.status(500).json({error:error.message});
    }
}

module.exports = {
    addValuesToSecTable
}



