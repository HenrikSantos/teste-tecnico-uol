require('dotenv').config();

const fastify = require('fastify')({ logger: true });
const customerRoutes = require('./routes/customerRoutes');
const sequelize = require('./database');

(async () => {
	try {
		await sequelize.sync({ force: false });
		console.log('Banco de dados sincronizado');

		fastify.register(customerRoutes);

		fastify.register(require('@fastify/cors'), {
			origin: (origin, callback) => {
				const corsOptions = {
					origin: true,
				};

				if (origin === 'http://localhost') {
					corsOptions.origin = false;
				}

				callback(null, corsOptions);
			},
		});

		const port = process.env.PORT || 3001;
		fastify.listen({ port }, (err) => {
			if (err) {
				console.error('Erro ao iniciar o servidor:', err);
				process.exit(1);
			}
			console.log('Servidor iniciado em http://localhost:' + port);
		});
	} catch (error) {
		console.error('Erro ao sincronizar o banco de dados:', error);
		process.exit(1);
	}
})();
