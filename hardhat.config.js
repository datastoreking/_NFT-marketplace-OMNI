require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.0",
      },
      {
        version: "0.8.0",
        settings: {},
      },
      {
        version: "0.8.6",
        settings: {},
      },
      {
        version: "0.8.7",
        settings: {},
      },
    ],
  },
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/91465883a5884c6db5b2154a4aa0f971", //Infura url with projectId
      accounts: ["b295b159886341657a5427a9ac5ff4c41c73a42a3d667d31e8f53ba9e548727e"] // add the account that will deploy the contract (private key)
     },
     bsct: {
      url: "https://data-seed-prebsc-1-s1.binance.org/",
      accounts: ["b295b159886341657a5427a9ac5ff4c41c73a42a3d667d31e8f53ba9e548727e"] 
    },
   }
};