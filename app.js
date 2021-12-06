const express = require('express');
const app = express();

const userRouter = require("./routes/user");
app.use(express.json());
app.use(userRouter);


const port = 8080;
app.listen(port,function(){
    console.log("Server Activated");
});