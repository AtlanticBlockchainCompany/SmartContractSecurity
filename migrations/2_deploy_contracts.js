const Reentrancy = artifacts.require('./contracts/Reentrancy.sol')

module.exports = function (deployer) {
  deployer.deploy(Reentrancy)
}
