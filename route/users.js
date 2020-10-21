const express = require("express");
const router = express.Router();

const fetch = require("node-fetch");


router.get("/:username",(req,res)=>{

    const username = req.params["username"];
    fetch("https://api.github.com/users/Balaraju-tech").then((data)=>{
        console.log("entered the fetch");
        return data.json();
    }).then((result)=>{
        res.status(200).send(result);
    });

});

module.exports = router;