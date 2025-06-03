const { Router } = require('express');
const {
  createPath,
  deletePath,
  getAllPaths,
  getSinglePath,
  updatePath
} = require('../controllers/paths');
const { catchErr, validate } = require('../middlewares'); // Assuming validate is exported from middlewares/index.js
const { param, body } = require('express-validator'); // Import body for create/update if needed later

const router = Router();

// Validation rules for ID parameter
const mongoIdParamValidation = [
  param('id').isMongoId().withMessage('Invalid ID format')
];

// Basic validation for path creation (can be expanded)
const pathCreateValidation = [
  body('title').notEmpty().withMessage('Title is required').trim(),
  body('shortDesc').notEmpty().withMessage('Short description is required').trim(),
  // Add other fields like level, category as required
];

// Basic validation for path update (can be expanded)
const pathUpdateValidation = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  // Add body validations for fields that can be updated, e.g.,
  // body('title').optional().notEmpty().withMessage('Title cannot be empty').trim(),
  // body('shortDesc').optional().notEmpty().withMessage('Short description cannot be empty').trim(),
];


router.post('/create', /* pathCreateValidation, validate, */ catchErr(createPath)); // Validation to be fully added later
router.put('/:id', mongoIdParamValidation, /* pathUpdateValidation, */ validate, catchErr(updatePath));
router.delete('/:id', mongoIdParamValidation, validate, catchErr(deletePath));
router.get('/', catchErr(getAllPaths));
router.get('/:id', mongoIdParamValidation, validate, catchErr(getSinglePath));

module.exports = router;
