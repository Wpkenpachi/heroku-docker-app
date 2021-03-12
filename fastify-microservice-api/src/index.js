require('make-promises-safe')
require('dotenv').config()
const fastify = require('fastify')({ logger: true })

const { FAST_API_HOST: HOST, PORT } = process.env;

fastify.register(require('fastify-postgres'), {
  connectionString: process.env.CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
})

fastify.register(require('./routes'))
fastify.register(require('./routes/products'))

fastify.listen(PORT, HOST, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  fastify.log.info(`server listening on ${address}`)
})