import User from './../users/schema/User'
import jwt from 'jwt-simple'
import JwtConfigs from '../config'

export default (req, res) => {

    let { username } = req.body    

    User
        .findOne({ username })
        .then((user) => {
            console.log(user)
            if(!user) {
                return res.status(404)
                          .json({
                              status: false, 
                              user: {}
                          })
            }

            user.validatePassword(user.password, (err, result) => {
                if(err) {
                    return res.status(404).json({
                        status: false, 
                        error: 'Error on validatePassword => '+err
                    })
                }                

                let token = jwt.encode({ id: user._id }, JwtConfigs.secretOrKey )
                
                return res.status(200).json({
                    status: true, 
                    token
                })
            })
        })
        .catch((error) => {
            return res.status(500).json({
                status: false,
                err: 'Except => ' + error
            })
        })
}