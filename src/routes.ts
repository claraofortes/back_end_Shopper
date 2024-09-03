import * as express from 'express'
import { customerController } from './controllers/customers';

class Router {

    constructor(server: express.Express) {
        const router = express.Router()
        /**
         * @swagger
         * '/':
         *  get:
         *      tags:
         *      - Inicio
         *      description: 'Hello World de teste de rota'
         *      responses:
         *          200:
         *              description: 'App esta rodando' 
         */
        router.get('/', (req, res) => {
            res.send('Hello World');
        });

        /**
         * @swagger
         * '/customer':
         *  post:
         *      summary: Criar um novo cliente um cliente
         *      tags:
         *      - Customer
         *      description: 'Hello World de teste de rota'
         *      requestBody:
         *          required: true
         *          content:
         *              application/json:
         *                  schema:
         *                      type: object
         *                      properties: 
         *                          customer_code:
         *                              type: string
         *                          
         *      responses:
         *          200:
         *              description: 'App esta rodando' 
         */

        router.post('/customer', customerController.insertCustomer);

        server.use('/', router)
    }
}

export default Router;