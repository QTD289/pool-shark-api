module.exports = {
  environments: {
    test: 'test',
    ropsten: 'ropsten',
    mainnet: 'mainnet'
  },
  rpc_endpoint: {
    test: 'http://localhost:8545',
    ropsten: process.env.RPC_ENDPOINT || '< enter eth node >',
    mainnet: process.env.RPC_ENDPOINT || '< enter eth node >'
  },
  contract_included_block: 1,
  parsing_active: true,
  db_connection: {
    test: 'mongodb://localhost:27017/shark_data_test_db',
    ropsten: process.env.DB_CONNECTION || 'mongodb://localhost:27017/shark_data_test_db',
    mainnet: process.env.DB_CONNECTION || 'mongodb://localhost:27017/shark_data_test_db'
  },
  app_contract_address: process.env.CONTRACT || '0x210cd4170f609b7a9d93019918818e9e6389ee40',
  domain: process.env.API_DOMAIN || 'http://localhost:3030',
  last_endpoint_version: '0.0.1',
  version: 'v1',
  port: process.env.PORT || 3030
}
