// eslint-disable-next-line no-undef
var MyContract = artifacts.require("faucet");

module.exports =  function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
}
