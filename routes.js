import hello from './hello/index'

export default (app) => {
    app.use('/', hello)
}