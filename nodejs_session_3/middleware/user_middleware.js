const users=[
    {username: 'alice', apiKey: 'alice@123'},
    {username: 'bob', apiKey: 'bob@123'},
    {username: 'charlie', apiKey: 'charlie@123'},
];
function userMiddleware(req,res,next){
    const index =users.findIndex((el)=>{
        return JSON.stringify(el)===JSON.stringify(req.body);
    });
    const isAuthorized = index>=0;
    if(!isAuthorized){
        res.status(401);
        res.json('Unauthorized');
        return;
    }next();

}
module.exports=userMiddleware;
