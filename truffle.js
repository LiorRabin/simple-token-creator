require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider')

module.exports = {
  networks: {
    mainnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://mainnet.infura.io/${process.env.INFURA_API_KEY}`),
      network_id: '1',
      gas: 4500000,
      gasPrice: 10000000000
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/${process.env.INFURA_API_KEY}`),
      network_id: '*',
      gas: 6721975,
      gasPrice: 25000000000
    },
    fuse: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `http://rpc.fuse.io`),
      network_id: '*',
      gas: 6721975,
      gasPrice: 0
    },
    development: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `http://localhost:8545`),
      network_id: '*',
      gas: 6000000,
      gasPrice: 25000000000
    }
  }
}

