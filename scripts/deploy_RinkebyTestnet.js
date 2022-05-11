const hre = require("hardhat");
async function main() {
  const Caveat = await hre.ethers.getContractFactory("Caveat");
  const CaveatContract = await Caveat.deploy(
    "",
    "0x79a63d6d8BBD5c6dfc774dA79bCcD948EAcb53FA"
  );
  await CaveatContract.deployed();
  console.log(
    "Rinkeby testnet ----- CaveatContract deployed to:",
    CaveatContract.address
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});