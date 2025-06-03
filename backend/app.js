require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const flash = require("connect-flash");
const cors = require('cors');

const errorHandler = require('./utils/errorHandler');
const { successResponse, errorResponse } = require('./utils/responseFormatter');
const { connectDB, closeDB } = require('./utils/dbUtils');
const validateInput = require('./utils/inputValidator');

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Connect to the database
connectDB()
  .then(connection => {
    console.log(`Connected to Mongo! Database name: "${connection.connection.name}"`);
    
    // Enable authentication using session + passport
    app.use(session({
      secret: 'irongenerator',
      resave: true,
      saveUninitialized: true,
      store: new MongoStore({ mongooseConnection: connection })
    }));
  })
  .catch(err => {
    console.error('Error connecting to mongo', errorResponse(err));
    process.exit(1);
  });

app.use(flash());
app.use(cors({
  origin: ['http://localhost:3001'],
  credentials: true
}));

require('./passport')(app);

app.use(express.static('public/build'));

// Example of using input validation (actual schemas would be defined in route files)
// app.use(validateInput());

// -------------ROUTES-----------
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/api', require('./routes/apiRoutes'));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/build/index.html`);
});

// Apply error handling middleware last
app.use(errorHandler);

// Graceful shutdown
process.on('SIGINT', async () => {
  await closeDB();
  process.exit(0);
});

module.exports = app;

