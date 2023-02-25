import { ethers } from 'hardhat';
import {
  LBVaultV1Native__factory,
  StrategyTJLiquidityBookLB__factory,
} from '../typechain-types';

const vault_add = '0x1f85459Ad40E25343929F958d4D44ED914B730E1';
const strat_add = '0xd44317158Ce7DfFFB87E59442777b88eBA901888';
const keeper_add = '0xFBf15b55CC4059cD276b92C5012EF81eBF7d03f6';

async function main() {
  const accounts = await ethers.getSigners();
  console.log(accounts[0].address);
  const vault = LBVaultV1Native__factory.connect(vault_add, <any>accounts[0]);
  await vault.setStrategyAddress(strat_add);
  console.log('Set up strategy in vault.');

  const strat = StrategyTJLiquidityBookLB__factory.connect(
    strat_add,
    <any>accounts[0]
  );

  await strat.setKeeper(keeper_add);
  console.log('Set up keeper in strategy');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
