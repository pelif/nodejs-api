import bills from '../bills/index'

export default (app, passport) => {    
    app.use('/bills', passport.authenticate('token', { session: false }), bills)
}