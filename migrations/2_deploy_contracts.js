const SimpleToken = artifacts.require('./SimpleToken.sol')

module.exports = deployer => {
  deployer.deploy(SimpleToken)
}
