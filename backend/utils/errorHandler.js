const responseFormatter = require('./responseFormatter');

/**
 * Global error handling middleware
 * Catches and processes errors, sending standardized error responses
 * 
 * @param {Error} err - The error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const errorHandler = (err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes

  let statusCode = 500;
  let errorMessage = 'Internal Server Error';
  let errorDetails = {};

  // Handle different types of errors
  if (err.name === 'ValidationError') {
    // Mongoose validation error
    statusCode = 400;
    errorMessage = 'Validation Error';
    errorDetails = Object.values(err.errors).reduce((acc, error) => {
      acc[error.path] = error.message;
      return acc;
    }, {});
  } else if (err.name === 'CastError') {
    // Mongoose cast error (e.g., invalid ObjectId)
    statusCode = 400;
    errorMessage = 'Invalid Data';
    errorDetails = { [err.path]: err.message };
  } else if (err.code === 11000) {
    // MongoDB duplicate key error
    statusCode = 409;
    errorMessage = 'Duplicate Entry';
    errorDetails = err.keyValue;
  } else if (err.name === 'JsonWebTokenError') {
    // JWT authentication error
    statusCode = 401;
    errorMessage = 'Authentication Error';
  } else if (err.name === 'UnauthorizedError') {
    // Custom authentication error
    statusCode = 401;
    errorMessage = err.message || 'Unauthorized';
  }

  // Use responseFormatter to send a standardized error response
  responseFormatter(res, {
    success: false,
    status: statusCode,
    message: errorMessage,
    error: errorDetails
  });
};

module.exports = errorHandler;