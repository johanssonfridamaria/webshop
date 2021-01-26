const router = require('express').Router();
const userModel = require('../models/users/userModel');

router.post('/register', auth,  userModel.registerUser);

router.post('/login', userModel.loginUser);

router.get('/', auth , userModel.getUsers);

router.patch('/:email', auth , userModel.updateUser);

router.delete('/:email', auth ,userModel.deleteUser);

module.exports = router;