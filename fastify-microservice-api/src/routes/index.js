async function routes(fastify, _options) {
  fastify.get('/', async (_request, reply) => {
    const client = await fastify.pg.connect()
    const { rows } = await client.query(
      'SELECT * FROM user'
    )
    client.release()
    return rows
  })
}

module.exports = routes