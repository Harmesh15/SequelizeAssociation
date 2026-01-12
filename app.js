const express = require("express");
const db = require("./utils/db-connection")
const studentRoutes = require("./routes/studentRoute");

//  models
require("./models");

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello from server");
})

app.use("/student",studentRoutes);

db.sync({force:true}).then(()=>{
    app.listen(3000,(err)=>{
    console.log("Server is running");
})

}).catch((err)=>{
  console.log(err)
})
