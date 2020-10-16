
const SashimiToken = artifacts.require("SashimiToken");
const MasterChef = artifacts.require("MasterChef");
//constructor paras for  MasterChef

var _SASHIMIPERBLOCK=new web3.utils.BN(100000000000000000000n);
module.exports = function (deployer) {
  deployer.deploy(SashimiToken).then(function () {
    return deployer.deploy(MasterChef, SashimiToken.address, _SASHIMIPERBLOCK
      , 1000, 101000);
  });
};