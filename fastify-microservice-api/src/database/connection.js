const { Client } = require('pg')

const ClientConn = async () => {
    const client = new Client()
    return await client.connect()
}

module.exports = ClientConn;