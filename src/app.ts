import express from 'express'
import Router from './router'
import * as bodyParser from 'body-parser'
import swaggerDocs from './utils/swagger'

class App {
    private httpServer: any
  
    constructor() {
      this.httpServer = express()
  
      this.httpServer.use(bodyParser.urlencoded({ extended: true }));
      this.httpServer.use(bodyParser.json());
      
      new Router(this.httpServer);
  
    }
  
    public Start = (port: number) => {
      return new Promise((resolve, reject) => {
  
        this.httpServer.listen(port, () => {
            resolve(port);
            swaggerDocs(this.httpServer, port)
          })
          .on('error', (err: object) => reject(err));
      })
    }
  }
  
  export default App;