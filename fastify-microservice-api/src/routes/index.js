async function routes(fastify, _options) {
  fastify.get('/', async (_request, reply) => {
    return reply.send({
      msg: 'Ok!'
    })
  })
}

module.exports = routes