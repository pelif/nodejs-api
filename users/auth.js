const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

import User from './../users/schema/User' 
import JwtConfigs from '../config'

// export default (passport) => {
module.exports = (passport) => {    
    passport.use('token', new JwtStrategy(JwtConfigs, (payload, cb) => {
        User
            .findById(payload.id)
            .select({ name: 1, username: 1})
            .then((user) => {
                if(!user) {
                    return cb(null, false)
                }
                return cb(null, user)
            })
            .catch((error) => {
                return cb(error, false)
            })
    }))
}