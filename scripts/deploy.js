async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with account:", deployer.address);

    const GTA6Coin = await ethers.getContractFactory("GTA6Coin");
    const token = await GTA6Coin.deploy();
    await token.deployed();

    console.log("GTA6Coin deployed to:", token.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
