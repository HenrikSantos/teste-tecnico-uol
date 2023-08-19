require('dotenv').config();

const fastify = require('fastify')({ logger: true });

const customerRoutes = require('./routes/customerRoutes');

const sequelize = require('./database');

sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

fastify.register(customerRoutes);

fastify.register(require('@fastify/cors'), (instance) => {
  return (req, callback) => {
    const corsOptions = {
      // This is NOT recommended for production as it enables reflection exploits
      origin: true
    };

    // do not include CORS headers for requests from localhost
    if (/^localhost$/m.test(req.headers.origin)) {
      corsOptions.origin = false
    }

    // callback expects two parameters: error and options
    callback(null, corsOptions)
  }
})

const port = process.env.PORT || 3001
fastify.listen({ port }, (err) => {
  if (err) {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1);
  }
  console.log('Servidor iniciado em http://localhost:' + port);
})
