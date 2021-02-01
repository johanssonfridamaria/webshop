const mongodb = require('mongoose');
const User = require('./userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authentication/auth');

exports.registerUser = (req, res) => {

    User.find({ email: req.body.email })
        .then(exists => {
            if (exists.length > 0) {
                return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: 'Email address is already taken'
                })
            }

            const salt = bcrypt.genSaltSync(10);
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        statusCode: 500,
                        status: false,
                        message: 'Failed when encrypting password'
                    })
                }

                const user = new User({
                    // _id: new mongodb.Types.ObjectId,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    passwordHash: hash,
                })

                user.save()
                    .then(() => {
                        res.status(201).json({
                            statusCode: 201,
                            status: true,
                            message: 'The User was created successfully'
                        })
                    })
                    .catch(() => {
                        res.status(500).json({
                            statusCode: 500,
                            status: false,
                            message: 'Failed to create user'
                        })
                    })
            })
        })
}

exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user === null) {
                return res.status(404).json({
                    statusCode: 404,
                    status: false,
                    message: 'Incorrect email or password'
                })
            }

            try {
                bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
                    if (result) {
                        let _user = {
                            id: user._id,
                            firstName: user.firstName,
                            role: user.role
                        }
                        return res.status(200).json({
                            statusCode: 200,
                            status: true,
                            message: 'Authentication was successful',
                            token: auth.generateToken(_user)
                        })
                    }

                    return res.status(401).json({
                        statusCode: 401,
                        status: false,
                        message: 'Incorrect email or password'
                    })

                })
            }
            catch {
                return res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Unable to authenticate user. Please contact the System Administrator'
                })
            }
        })
}

exports.getUsers = (req, res) => {
    User.find()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err))
}

exports.updateUser = (req, res) => {
    User.updateOne({ email: req.params.email }, req.body)
        .then(() => {
            User.updateOne({ email: req.params.email }, { $set: { modified: Date.now() } })
                .then(() => {
                    res.status(200).json({
                        statusCode: 200,
                        status: true,
                        message: 'User updated successfully'
                    })
                })
        })
        .catch(() => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to update user'
            })
        })
}

exports.deleteUser = (req, res) => {
    User.deleteOne({ email: req.params.email })
        .then(() => {
            res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'User deleted'
            })
        })
        .catch(() => {
            res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to delete user'
            })
        })
}

