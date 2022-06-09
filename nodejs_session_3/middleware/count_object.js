const countObject=[
	{user: 'alice', student: 0, teacher: 0, subject: 0},
    {user: 'bob', student: 0, teacher: 0, subject: 0},
    {user:'charlie',student:0,teacher:0,subject:0},
];
function countNumber(req,res,next){
    console.log("request body",rep.body);
    countObject.forEach((pp)=>{
        if(pp.user===req.body.username&& req.baseUrl==="/students"){
            pp.student++;
        }else if(
            pp.user === req.body.username&&req.baseUrl==="/teachers"
        ){
            pp.teacher++;
        }else if(
            pp.user===req.body.username&&req.baseUrl==="/subjects"
        ){
            pp.subject++;
        }

    });
    console.log(countObject);
}
module.exports=countNumber;