const { Router } = require('express');
const {
  createSubscription,
  deleteSuscriber,
  getAllSuscribers,
  getSingleSuscriber
} = require('../controllers/suscribers');
const { catchErr, validate } = require('../middlewares');
const { param, body } = require('express-validator');

const router = Router();

// Validation rules for ID parameter
const mongoIdParamValidation = [
  param('id').isMongoId().withMessage('Invalid ID format')
];

// Basic validation for subscriber creation (can be expanded based on actual fields)
const subscriberCreateValidation = [
  // Example: body('userId').isMongoId().withMessage('Invalid User ID'),
  // Example: body('pathId').isMongoId().withMessage('Invalid Path ID'),
];

router.post('/create', /* subscriberCreateValidation, validate, */ catchErr(createSubscription)); // Validation to be fully added later
router.delete('/:id', mongoIdParamValidation, validate, catchErr(deleteSuscriber));
router.get('/', catchErr(getAllSuscribers));
router.get('/:id', mongoIdParamValidation, validate, catchErr(getSingleSuscriber));

module.exports = router;
