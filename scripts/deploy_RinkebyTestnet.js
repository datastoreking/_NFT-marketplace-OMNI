const hre = require("hardhat");
async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.deploy(
    "",
    "0x79a63d6d8BBD5c6dfc774dA79bCcD948EAcb53FA"
  );
  await omniChainNFT.deployed();
  console.log(
    "Rinkeby testnet ----- omniChainNFT deployed to:",
    omniChainNFT.address
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});