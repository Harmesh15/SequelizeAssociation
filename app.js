const express = require("express");
const db = require("./utils/db-connection")
const studentRoutes = require("./routes/studentRoute");
const courseRoutes = require("./routes/courseRoute");

//  models
require("./models");

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello from server");
})

app.use("/student",studentRoutes);
app.use("/courses",courseRoutes);

db.sync({force:false}).then(()=>{
    app.listen(3000,(err)=>{
    console.log("Server is running");
})

}).catch((err)=>{
  console.log(err)
})
