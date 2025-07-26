const express = require('express');
const router = express.Router();
const { createForm, getForms } = require('../controllers/formController');
const { validateCredentials } = require('../middlewares/validation');
router.post('/', createForm);
router.get('/', validateCredentials, getForms);

module.exports = router;
