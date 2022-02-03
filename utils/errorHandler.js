class ErrorHandler extends Error {
    constructer(message, statusCode){
        this.message = message
        this.statusCode = statusCode

        Error.captureStackTrace(this, this.constructer); 
    }
}

module.exports = ErrorHandler