module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  
  networks: {

    aleRSK33: {
      gas: 2500000,
      gasPrice: 1,
      from : "0xcd2a3d9f938e13cd947ec05abc7fe734df8dd826",
      host: "127.0.0.1",
      port: 4444,
      network_id: "*", // Match any network id
    },
    aleRSK: {
      gas: 2500000,
      gasPrice: 1,
      from : "0x548b215ffdc81dc413ff1aaecf30622c9f6c5d64",
      host: "127.0.0.1",
      port: 9545,
      network_id: "*", // Match any network id
    },
    aleRSK2222: {
      host: "127.0.0.1",
      port: 4444,
      network_id: "*",
      provider: function() {
        return new HDWalletProvider("profit pause green barely roof jump pave below dutch earth erase curious", "http://127.0.0.1:4444/");
      }
    },
    /*test: {
      host: "127.0.0.1",
      port: 4444,
      network_id: "*",
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:4444/");
      }
    }*/
  }
  
};
