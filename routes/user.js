const express = require('express');
const router = express.Router();

router.post("/signin",function(){
    console.log("Signin");
});

router.post("/signup",function(req,res){
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.email);
    console.log(req.body.password);
    res.send("Sucess.....");

});

module.exports = router;