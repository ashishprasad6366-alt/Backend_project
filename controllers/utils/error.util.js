class AppError extends Error {
    construtor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;