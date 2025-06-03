const Joi = require('joi');

/**
 * Middleware function to validate request inputs based on specified schemas
 * @param {Object} schema - Joi schema for validation
 * @returns {Function} Express middleware function
 */
const inputValidator = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
      const errorDetails = error.details.map(detail => ({
        message: detail.message,
        path: detail.path
      }));
      
      return res.status(400).json({
        error: 'Validation Error',
        details: errorDetails
      });
    }
    
    next();
  };
};

module.exports = inputValidator;