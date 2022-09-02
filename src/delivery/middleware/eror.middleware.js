const errorMiddleware = (error,req,res,next)=>{
    req.log.error(error.message)
    if (error.type==='REDIRECT'){
        res.redirect("eror")
    }
}
module.exports = errorMiddleware;