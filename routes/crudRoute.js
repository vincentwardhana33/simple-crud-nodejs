const express = require('express');
const router = express.Router();

const crudController = require('../controllers/crudController.js');

router.post('/insert', crudController.insert);
router.get('/select', crudController.select);
router.post('/delete', crudController.delete);

module.exports = router;
