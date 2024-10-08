import {Express, Request, Response} from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { version } from '../../package.json'

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info:{
            title: "back-end Shopper",
            version
        },
        components:{
            securityShema:{
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security:[
            {
                bearerAuth: []
            }
        ] ,
    },
    apis: ["**/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(app: Express, port: number, host: string){
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    app.get('docs.json', (req: Request, res: Response) =>{
        res.setHeader('Content-Type','application/json')
        res.send(swaggerSpec)
    });
    console.log(`Documento presente em http://${host}:${port}/docs`)
}

export default swaggerDocs;