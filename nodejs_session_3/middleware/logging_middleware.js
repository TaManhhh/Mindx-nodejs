function LoggingMiddleWare (req, res, next) {
    console.log(`New request at from${req.body.username} at ${new Date()}`);
    next()
}

module.exports = LoggingMiddleWare