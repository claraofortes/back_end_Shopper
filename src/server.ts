import app from './app'
import dotenv from 'dotenv'; 

dotenv.config();

const PORT = parseInt(process.env.PORT || '3000')
const HOST = (process.env.HOST || '0.0.0.0')

const server = new app().Start(PORT, HOST)
  .then(port => console.log(`O servidor está rodando em http://${HOST}:${PORT}`))
  .catch(error => {
    console.log(error)
    process.exit(1);
  });

export default server;