import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

// An example of a deploy script that will deploy and call a simple contract.
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the Greeter contract`);

  const wallet = new Wallet(process.env.PRIVATE_KEY!);

  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("Greeter");

  const greeting = "Hi there!";
  const greeterContract = await deployer.deploy(artifact, [greeting]);

  const factoryArtifact = await deployer.loadArtifact("GreeterFactory");
  const factoryContract = await deployer.deploy(factoryArtifact, [greeterContract.address]);

  const rc = await (await factoryContract.createGreeter()).wait();
  console.log(rc.events)

}
