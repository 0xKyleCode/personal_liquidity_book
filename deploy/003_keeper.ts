import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  const strat = await deployments.get('StrategyTJLiquidityBookLB');

  await deploy('LBActiveStratManagerActiveV2', {
    from: deployer,
    log: true,
    args: [strat.address, 1, 5],
  });
};
export default func;
func.id = 'Keeper';
func.tags = ['Keeper'];
