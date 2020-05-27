const check = require('express-validator/check').check

let validation = [
    check('name')
        .isAlphanumeric().withMessage('The field name can be alphanumeric')
        .isLength({ min: 3}).withMessage('The minimum length by field name not satisfy'),

    check('username')    
        .isAlphanumeric().withMessage('The field username need be alphanumeric')
        .isLength({ min: 3}).withMessage('The minimum length by field username need be three'),

    check('password')    
        .isAlphanumeric().withMessage('THe field password need be alphanumeric')
        .isLength({ min: 5})
]    

export default validation
