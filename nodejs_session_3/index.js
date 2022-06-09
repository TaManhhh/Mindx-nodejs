const express = require("express");
const app = express();
const studentRouter = require('./router/students');
const teacherRouter =require('./router/teacher');
const subjectRouter = require('./router/subjects');
const userMiddleware = require('./middleware/user_middleware');
const countNumber= require('./middleware/count_object');
// const studentMiddleWare = require('./middleware/student_middleware')
const LoggingMiddleWare = require('./middleware/logging_middleware')
const morgan = require('morgan')
const bodyParser = require('body-parser');
app.use(morgan('tiny'))
app.use(bodyParser.json({ extended: true }));
app.use("/students",LoggingMiddleWare ,userMiddleware, studentRouter,countNumber);
app.use("/teacher",LoggingMiddleWare ,userMiddleware, teacherRouter,countNumber);
app.use("/subjects",LoggingMiddleWare ,userMiddleware, subjectRouter,countNumber);


// 1. New Request a + Second funciton running ==> success
// 2. New Request at + second function is running + Third function is running  ===> Success
// app.get("/teacher", LoggingMiddleWare,(req, res) => {
//     res.json('Success')
// })
// app.get("/class", LoggingMiddleWare,(req, res) => {
//     res.json('Success')
// })

// app.use(express.static('assests'))
app.listen(3000, (err) => {
  if (err) {
    return;
  }
  console.log("Application is running on port 3000");
});
