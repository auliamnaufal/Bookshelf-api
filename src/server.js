const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route([
    {
      method: 'GET',
      path: '/books',
      handler: () => 'apa kabaar',
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada port ${server.info.uri}`);
};

init();
