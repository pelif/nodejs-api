const check = require('express-validator/check').check

let validation = [
    check('id')
        .isAlphanumeric().withMessage('The field id can be alphanumeric')
        .isLength({ min: 24}).withMessage('The minimum length by field id not satisfy')
    
]    

export default validation
