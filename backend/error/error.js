class ErrorHandler extends Error{
    constructor(message,statuscode){
        super(message);
        this.statuscode = statuscode;
    }
}

const errorMiddleware = (err,req,res,next) =>{
    err.message = err.message || "Internal server error!";
    err.statuscode = err.statuscode || 500;
    return res.status(err.statuscode).json({
        success:false,
        message:err.message,
    });
}

module.exports = { ErrorHandler, errorMiddleware };