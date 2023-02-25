import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  const vault = await deployments.get('LBVaultV1Native');

  await deploy('StrategyTJLiquidityBookLB', {
    from: deployer,
    log: true,
    args: [
      '0xE3Ffc583dC176575eEA7FD9dF2A7c65F7E23f4C3',
      '0xBE15BC0A3e37F1A3445DEfb4F0FF6eba0E4F19E2',
      vault.address,
      [
        '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
        '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
        '0xB5352A39C11a81FE6748993D586EC448A01f08b5',
        20,
        [
          -35, -29, -26, -21, -18, -15, -9, -6, -3, 0, 3, 6, 9, 15, 18, 21, 26,
          29, 35,
        ],
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 100000000000000000, 100000000000000000,
          100000000000000000, 100000000000000000, 100000000000000000,
          100000000000000000, 100000000000000000, 100000000000000000,
          100000000000000000, 100000000000000000,
        ],
        [
          100000000000000000, 100000000000000000, 100000000000000000,
          100000000000000000, 100000000000000000, 100000000000000000,
          100000000000000000, 100000000000000000, 100000000000000000,
          100000000000000000, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        1,
      ],
    ],
  });
};
export default func;
func.id = 'Strat';
func.tags = ['Strat'];
