const User = require('../models/User');
const bcrypt = require('bcrypt');
const passport = require('passport');
const inputValidator = require('../utils/inputValidator');
const responseFormatter = require('../utils/responseFormatter');
const dbUtils = require('../utils/dbUtils');
const errorHandler = require('../utils/errorHandler');

exports.signup = async (req, res, next) => {
  try {
    const { username, password, email, image } = req.body;

    // Validate input
    if (!inputValidator.isValidSignup(username, password, email)) {
      return responseFormatter.error(res, 400, 'Invalid input data');
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return responseFormatter.error(res, 400, 'Username already exists');
    }

    const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(12));

    const newUser = await User.create({
      email,
      username,
      password: hashPass,
      image
    });

    newUser.password = null;
    return responseFormatter.success(res, 201, 'User created successfully', newUser);
  } catch (error) {
    return errorHandler(error, req, res, next);
  }
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      return errorHandler(err, req, res, next);
    }
    if (!user) {
      return responseFormatter.error(res, 401, 'Authentication failed', failureDetails);
    }

    req.login(user, (loginErr) => {
      if (loginErr) {
        return errorHandler(loginErr, req, res, next);
      }
      user.password = null;
      return responseFormatter.success(res, 200, 'Login successful', user);
    });
  })(req, res, next);
};

exports.currentUser = (req, res) => {
  responseFormatter.success(res, 200, 'Current user', req.user || null);
};

exports.logout = (req, res) => {
  req.logout();
  responseFormatter.success(res, 200, 'Logout successful');
};

exports.edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, name, email, image, suscribers, paths, suscriptions, favorites } = req.body;

    const updated = await User.findByIdAndUpdate(
      id,
      { email, username, name, suscribers, image, paths, suscriptions, favorites },
      { new: true }
    );

    responseFormatter.success(res, 202, 'User updated successfully', updated);
  } catch (error) {
    errorHandler(error, req, res, next);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await dbUtils.getAllUsers();
    responseFormatter.success(res, 200, 'All users retrieved', users);
  } catch (error) {
    errorHandler(error, req, res, next);
  }
};

exports.getSingleUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await dbUtils.getSingleUser(id);
    responseFormatter.success(res, 200, 'User retrieved', user);
  } catch (error) {
    errorHandler(error, req, res, next);
  }
};

exports.googleInit = passport.authenticate('google', {
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email"
  ]
});

exports.googleCb = (req, res, next) => {
  passport.authenticate('google', (err, user, errDetails) => {
    if (err) {
      return errorHandler(err, req, res, next);
    }
    if (!user) {
      return responseFormatter.error(res, 401, 'Google authentication failed', errDetails);
    }

    req.login(user, (loginErr) => {
      if (loginErr) {
        return errorHandler(loginErr, req, res, next);
      }
      return res.redirect('/');
    });
  })(req, res, next);
};
