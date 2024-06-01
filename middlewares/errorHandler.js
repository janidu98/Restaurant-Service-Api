export const errorHanlder = (err, req, res, next) => {
    const message = err.message || 'Internal Server Error';
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
        succuss: false,
        statusCode,
        message
    })
}