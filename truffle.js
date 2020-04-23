require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider')

const {
  MNEMONIC,
  PRIVATE_KEY,
  INFURA_API_KEY
} = process.env

module.exports = {
  networks: {
    mainnet: {
      provider: () => new HDWalletProvider(MNEMONIC || PRIVATE_KEY, `https://mainnet.infura.io/${INFURA_API_KEY}`),
      network_id: '1',
      gas: 4500000,
      gasPrice: 10000000000
    },
    ropsten: {
      provider: () => new HDWalletProvider(MNEMONIC || PRIVATE_KEY, `https://ropsten.infura.io/${INFURA_API_KEY}`),
      network_id: '*',
      gas: 6721975,
      gasPrice: 25000000000
    },
    fuse: {
      provider: () => new HDWalletProvider(MNEMONIC || PRIVATE_KEY, `https://rpc.fuse.io`),
      network_id: '*',
      gas: 6721975,
      gasPrice: 0
    },
    development: {
      provider: () => new HDWalletProvider(MNEMONIC || PRIVATE_KEY, `http://localhost:8545`),
      network_id: '*',
      gas: 6000000,
      gasPrice: 25000000000
    }
  }
}

