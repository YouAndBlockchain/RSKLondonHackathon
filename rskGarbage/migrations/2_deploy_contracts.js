const Garbage = artifacts.require("Garbage");

module.exports = function(deployer) {
  deployer.deploy(Garbage);
};
