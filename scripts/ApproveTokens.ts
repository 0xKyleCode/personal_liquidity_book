import { ethers } from 'hardhat';
import { ERC20__factory } from '../typechain-types';

const vault_add = '0x1f85459Ad40E25343929F958d4D44ED914B730E1';
const usdc_add = '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E';
const wavax_add = '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7';

async function main() {
  const accounts = await ethers.getSigners();
  const usdc = ERC20__factory.connect(usdc_add, accounts[0]);
  const wavax = ERC20__factory.connect(wavax_add, accounts[0]);

  await usdc.approve(vault_add, ethers.constants.MaxUint256);
  console.log('Approved USDC.');
  await wavax.approve(vault_add, ethers.constants.MaxUint256);
  console.log('Approved wavax');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
