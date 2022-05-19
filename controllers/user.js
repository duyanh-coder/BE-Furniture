const User = require('../models/User')

// getAll Controller
const index = async (req, res, next) => {
    const users = await User.find({})
    // throw new Error('Test error!')

    return res.status(200).json({users})

}

// newUser Controller
const newUser = async (req, res, next) => {
    // console.log('req.body contents: ', req.body)
    // throw new Error('Created test!')

    const newUser = new User(req.body)
    await newUser.save()

    return res.status(201).json({
        message: 'Created success!'
    })
}




module.exports = {
    index,
    newUser
}