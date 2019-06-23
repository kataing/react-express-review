const router = require('express').Router();
const controller = require('./controller');

router
  .route('/api')
  .get(controller.get)
  .post(controller.post)
  .delete(controller.delete);

module.exports = router;