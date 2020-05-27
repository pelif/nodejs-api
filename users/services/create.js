import User from './../schema/User'

export default (req, res) => {
    let user = new User(req.body)
    user.hashPassword(user.password, (err, encPassword) => {
        user.password = encPassword 

        user
        .save()
        .then((created) => {
            if(!created) {
                return res.status(404)
                          .json({
                              status: false, 
                              data: {}
                          })
            }              
            
            return res.status(201)
                      .json({
                            status: true, 
                            data: created
                        })   
        })       
        .catch(err => res.status(500)
                         .json({
                             status: false, 
                             data: {}
                         })
        )
    })
    
}