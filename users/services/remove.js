import User from './../schema/User'

export default (req, res) => {
    User
        .findByIdAndDelete(req.params.id)
        .then(() => res.status(204).json({}))
        .catch(err => res.status(500
                         .json({
                             status: false, 
                             data: {}
                         }))
        )
}