import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  await deploy('LBVaultV1Native', {
    from: deployer,
    log: true,
    args: ['Personal LB Vault', 'Personal LB Vault'],
  });
};
export default func;
func.id = 'Vault';
func.tags = ['Vault'];
