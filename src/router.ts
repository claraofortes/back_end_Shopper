import * as express from 'express'

class Router {

    constructor(server: express.Express) {
        const router = express.Router()

        router.get('/', (req, res) => {
            res.send('Hello World');
        });

        server.use('/', router)
    }
}

export default Router;