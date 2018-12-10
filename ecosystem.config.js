module.exports = {
  apps: [
    {
      name: 'POOL-SHARK-API',
      script: 'index.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_test: {
        NODE_ENV: 'test',
        API_PORT: 3030,
        API_DOMAIN: 'http://localhost:3030',
        CONTRACT: '0x210cd4170f609b7a9d93019918818e9e6389ee40',
        RPC_ENDPOINT: '< enter rpc endpoint >',
        DB_CONNECTION: '< enter db connection >'
      },
      env_staging: {
        NODE_ENV: 'ropsten',
        API_PORT: 3030,
        API_DOMAIN: 'http://localhost:3030',
        CONTRACT: '0x210cd4170f609b7a9d93019918818e9e6389ee40',
        RPC_ENDPOINT: '< enter rpc endpoint >',
        DB_CONNECTION: '< enter db connection >'
      }
    }
  ]
}
