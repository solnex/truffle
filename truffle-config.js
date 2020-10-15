var HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
var mnemonic = "bf0605f410dae1dec97966c9bc22dd1852d0dfe3233dbcd26ba64559179eed9a";
module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    kovan: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://kovan.infura.io/v3/89da3e2e7a1b4cc08fc6887c6496dc75");   // 1表示第二个账户(从0开始)
      },
      network_id: 42,
      gas: 3000000,      //make sure this gas allocation isn't over 4M, which is the max
      gasPrice: 10000000000//10 GWei
    }
  },
  //
  compilers: {
    solc: {
      version: "0.6.12"
    }
  }
};
