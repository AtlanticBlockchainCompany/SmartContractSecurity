const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),

  networks: {
    ganache: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    geth: {
      host: '127.0.0.1',
      port: 8546,
      network_id: 1337,
      gas: 60000
    }
  },
  solc: {
    // Turns on the Solidity optimizer. For development the optimizer's
    // quite helpful, just remember to be careful, and potentially turn it
    // off, for live deployment and/or audit time. For more information,
    // see the Truffle 4.0.0 release notes.
    //
    // https://github.com/trufflesuite/truffle/releases/tag/v4.0.0
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
