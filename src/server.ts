import app from './app'

const PORT = parseInt('3000')

const server = new app().Start(PORT)
  .then(port => console.log(`Server running on port ${PORT}`))
  .catch(error => {
    console.log(error)
    process.exit(1);
  });

export default server;