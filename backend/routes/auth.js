const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require('../models/User')

const { isAuth, validate, catchErr } = require('../middlewares') // Added validate and catchErr
const { body } = require('express-validator'); // Added body
const { signup, login, logout, currentUser, edit, googleInit, googleCb, getAllUsers, getSingleUser } = require('../controllers/auth')
// Bcrypt to encrypt passwords


router.post(
  "/login",
  [
    body('username').notEmpty().withMessage('Username is required').trim().escape(), // Assuming login is with username, not email, based on localStrategy.js
    body('password').notEmpty().withMessage('Password is required'),
  ],
  validate,
  login
);

router.post(
  "/signup",
  [
    body('email').isEmail().withMessage('Must be a valid email address').normalizeEmail(),
    body('username').notEmpty().withMessage('Username is required').trim().escape(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('name').optional().trim().escape(), // Assuming 'name' is an optional field
  ],
  validate,
  catchErr(signup) // Wrapped signup with catchErr
);

router.get('/current-user', currentUser)

router.get("/logout",isAuth, logout);

router.put("/edit/:id",isAuth, edit)

router.get('/google', googleInit)

router.get('/google/callback', googleCb)

router.get('/profile', isAuth, (req, res, next) => {
    User.findById(req.user._id)
      .then((user) => res.status(200).json({ user }))
      .catch((err) => res.status(500).json({ err }));
  });

router.get('/user', getAllUsers)

router.get('/user/:id', getSingleUser)

module.exports = router;