const express=require("express");
const subjectRouter = express.Router();
const Subjects =[
    {
        id: 1,
        name: 'Toan',
    },
    {
        id: 2,
        name: 'Van',
    },
    {
        id: 3,
        name: 'Anh',
    }
];
subjectRouter.post("",(req,res,next)=>{
    console.log("Sucess");
    res.json(Subjects);
    next();
});
module.exports=subjectRouter;