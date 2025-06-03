const { Router } = require('express');
const {
  createTopic,
  deleteTopic,
  getAllTopic,
  getSingleTopic,
  updateTopic,
  updateContent // This was the second PUT on /topic/:id
} = require('../controllers/topics');
const { catchErr, validate } = require('../middlewares');
const { param, body } = require('express-validator');

const router = Router();

// Validation rules for ID parameter
const mongoIdParamValidation = [
  param('id').isMongoId().withMessage('Invalid ID format')
];

// Basic validation for topic creation (can be expanded)
const topicCreateValidation = [
  body('title').notEmpty().withMessage('Title is required').trim(),
  body('objective').notEmpty().withMessage('Objective is required').trim(),
  // Add other fields like duration, content as required
];

// Basic validation for topic update (can be expanded)
const topicUpdateValidation = [
  param('id').isMongoId().withMessage('Invalid ID format'),
  // Add body validations for fields that can be updated
];

router.post('/create', /* topicCreateValidation, validate, */ catchErr(createTopic)); // Validation to be fully added later
router.put('/:id', mongoIdParamValidation, /* topicUpdateValidation, */ validate, catchErr(updateTopic));
// Note: Two PUT handlers for the same '/:id' route were in apiRoutes.js.
// The second one (updateContent) will likely not be reached unless the first one calls next().
// This might need further review for intended functionality.
router.put('/:id', mongoIdParamValidation, /* topicUpdateValidation, */ validate, catchErr(updateContent));
router.delete('/:id', mongoIdParamValidation, validate, catchErr(deleteTopic));
router.get('/', catchErr(getAllTopic));
router.get('/:id', mongoIdParamValidation, validate, catchErr(getSingleTopic));

module.exports = router;
