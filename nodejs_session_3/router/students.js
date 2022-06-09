const express = require("express");
const studentRouter = express.Router();

const students = [
  {
      id: 1,
      name: 'Tai',
      age: 14
  },
  {
      id: 2,
      name: 'Minh',
      age: 14
  },
  {
      id: 3,
      name: 'Nghia',
      age: 15
  }
];

studentRouter.post("", (req, res,next) => {
    console.log('this is request from client')  
    res.json(students);
    next();
  });

// studentRouter.post("/", (req, res) => {
//     res.json(students)ghg
// })
module.exports = studentRouter;