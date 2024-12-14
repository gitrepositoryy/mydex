async function main() {
  //fetch the token to deploy
  const Token = await ethers.getContractFactory("Token")

  //deploy the contract
//const token = await Token.deploy()
const token = await Token.deploy("MBTBA Token", "MBTBA", 100000);
await token.deployed()
console.log(`Token Contract deployed to: ${token.address}`)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
