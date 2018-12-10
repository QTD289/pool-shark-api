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
  app_contract_address: process.env.CONTRACT || '0x8E41b6c00Ac5b413150b0bfdaF76b52e4Dc1AC03',
  domain: process.env.API_DOMAIN || 'http://localhost:3030',
  last_endpoint_version: '0.0.1',
  version: 'v1',
  port: process.env.PORT || 3030
}
