const express = require("express");
const app = express();
const port = process.env.PORT||7500;
const userController = require("./route/users");

const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.listen(port,()=>{
    console.log("app is running on port %s",port);
});


app.use("/users",userController);