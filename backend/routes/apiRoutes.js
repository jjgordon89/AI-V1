const { Router } = require('express');
const pathRoutes = require('./paths.routes');
const topicRoutes = require('./topics.routes');
const subscriberRoutes = require('./suscribers.routes');
const favRoutes = require('./favs.routes');

const router = Router();

// Delegate to resource-specific routers
router.use('/path', pathRoutes);
router.use('/topic', topicRoutes);
router.use('/subs', subscriberRoutes);
router.use('/favs', favRoutes);

module.exports = router;
