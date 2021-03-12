const products = [
  {
    id: 1,
    title: 'Good Wine',
    description: 'Some good wine that a never drunk.',
    price: 15700
  },
  {
    id: 2,
    title: 'Good Expencive Wine',
    description: 'Some good expensive wine that a never drunk.',
    price: 25700
  }
];

async function routes(fastify, _options) {
  fastify.get('/products', async (_request, reply) => {
    return reply.send(products)
  })

  fastify.get('/products/:id', async (_request, reply) => {
    const productId = _request.params.id - 1;
    if (products[productId]) {
      return reply.send(products[productId])
    } else {
      return reply.status(404).send({})
    }
  })
}

module.exports = routes
