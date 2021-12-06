var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller');
/* GET home page. */

router.get('/',controller.viewAll);

router.get('/add', controller.renderAddForm);

router.post('/add', controller.addCard);
module.exports = router;
