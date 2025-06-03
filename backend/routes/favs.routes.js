const { Router } = require('express');
const {
  createFav,
  deleteFav,
  getAllFavs,
  getSingleFav
} = require('../controllers/favs');
const { catchErr, validate } = require('../middlewares');
const { param, body } = require('express-validator');

const router = Router();

// Validation rules for ID parameter
const mongoIdParamValidation = [
  param('id').isMongoId().withMessage('Invalid ID format')
];

// Basic validation for favs creation (can be expanded based on actual fields)
const favCreateValidation = [
  // Example: body('userId').isMongoId().withMessage('Invalid User ID'),
  // Example: body('pathId').isMongoId().withMessage('Invalid Path ID'),
];

router.post('/create', /* favCreateValidation, validate, */ catchErr(createFav)); // Validation to be fully added later
router.delete('/:id', mongoIdParamValidation, validate, catchErr(deleteFav));
router.get('/', catchErr(getAllFavs));
router.get('/:id', mongoIdParamValidation, validate, catchErr(getSingleFav));

module.exports = router;
