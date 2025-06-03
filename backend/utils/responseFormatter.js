/**
 * Standardizes API responses for both success and error cases.
 * 
 * @param {object} res - The Express response object.
 * @param {number} statusCode - The HTTP status code for the response.
 * @param {string} message - A descriptive message about the response.
 * @param {object|null} data - The data to be sent in the response (optional).
 * @returns {object} - The formatted response object.
 */
const responseFormatter = (res, statusCode, message, data = null) => {
  const response = {
    success: statusCode >= 200 && statusCode < 300,
    status: statusCode,
    message: message,
  };

  if (data !== null) {
    response.data = data;
  }

  return res.status(statusCode).json(response);
};

module.exports = responseFormatter;