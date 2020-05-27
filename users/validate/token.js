const check = require('express-validator/check').check

let validateToken = [
    check('username', 'Please check username field')
        .isAlphanumeric()
        .isLength({ min: 3 }),

    check('password', 'Please check password field')    
        .isAlphanumeric()
        .isLength({ min: 3})
]

export default validateToken