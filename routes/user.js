const express = require('express')
const router = require('express-promise-router')()

const UserController = require('../controllers/user')

// User root Route
router.route('/')
    .get(UserController.index)
    .post(UserController.newUser)

module.exports = router