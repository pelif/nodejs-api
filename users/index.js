import express from 'express'
import create from './services/create'
import remove from './services/remove'
import criteriaCreate from './validate/create'
import criteriaRemove from './validate/remove'
import criteriaToken from './validate/token'
import validate from './validate'
import token from './token' 

const router = express.Router()

router.post('/token', criteriaToken, validate, token)
router.post('/', criteriaCreate, validate,  create)
router.delete('/:id', criteriaRemove, validate, remove)

export default router