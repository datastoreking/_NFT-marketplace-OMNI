const hre = require("hardhat");
async function main() {
  const Caveat = await hre.ethers.getContractFactory("Caveat");
  const CaveatContract = await Caveat.deploy(
    "",
    "0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1"
  );
  await CaveatContract.deployed();
  console.log(
    "BSC testnet ----- CaveatContract deployed to:",
    CaveatContract.address
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});