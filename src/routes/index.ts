const Router = require('koa-router');
const bookRoutes = require('./books/books.routes');
const router = new Router();

// Use feature routes
router.use('/api', bookRoutes.routes());

module.exports = router;