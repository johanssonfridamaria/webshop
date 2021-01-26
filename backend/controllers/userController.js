const router = require('express').Router();
const userModel = require('../models/users/userModel');
const auth = require('../authentication/auth');

router.post('/register', auth.verifyToken,  userModel.registerUser);

router.post('/login', userModel.loginUser);

router.get('/', auth.verifyToken , userModel.getUsers);

router.patch('/:email', auth.verifyToken , userModel.updateUser);

router.delete('/:email', auth.verifyToken ,userModel.deleteUser);

module.exports = router;