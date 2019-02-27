const SimpleStorage = artifacts.require('./contracts/')

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage)
}
