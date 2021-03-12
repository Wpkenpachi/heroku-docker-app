require('make-promises-safe')
require('dotenv').config()
const fastify = require('fastify')({ logger: true })
const DBClient = require('./database/connection')

const { FAST_API_PORT: PORT } = process.env;

fastify.register(require('./routes/products'))

const start = async () => {
  try {
    await fastify.listen(PORT, () => console.log(`Running server at port ${PORT}`))
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start();