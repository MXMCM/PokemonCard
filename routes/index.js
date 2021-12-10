var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller');
/* GET home page. */

router.get('/',controller.viewAll);

router.get('/add', controller.renderAddForm);

router.post('/add', controller.addCard);

router.get('/edit/:id', controller.renderEditForm);

router.post('/edit/:id', controller.updateRestaurant);

router.get('/delete/:id', controller.deleteCard);
module.exports = router;
