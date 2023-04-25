const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('./catchAsyncErrors')
const jwt = require("jsonwebtoken");
const user = require('../models/user');

// Checks if user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const token = req.get('Authorization').replace('Bearer ', '');

    if(!token) {
        return next(new ErrorHandler('Login first to access this ressource.', 401))
    }
    try{
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
   
   
    req.user = await user.findById(decoded.id);
    
    next()  ;

} catch (error) {
    
    localStorage.removeItem('authToken');
    return next(new ErrorHandler('Invalid or expired token.', 401));
  }
})

// Handling users roles
exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            return next(
                new ErrorHandler(`Role (${req.user.role}) is not allowed to access this ressource`, 
                403))
        }
        next()
    }
}