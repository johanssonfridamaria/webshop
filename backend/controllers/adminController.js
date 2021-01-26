const router = require('express').Router();
const adminModel = require('../models/admin/adminModel');

// register admin

router.post('/register', adminModel.registerAdmin);
router.post('/login', adminModel.loginAdmin);

module.exports = router;