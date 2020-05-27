import users from './../users/index'

export default (app, passport) => {
    app.use('/users', passport.authenticate('token', { session: false}), users)
}


