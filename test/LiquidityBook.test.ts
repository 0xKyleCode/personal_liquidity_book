import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { LBVaultV1Native, LBVaultV1Native__factory } from '../typechain-types';

describe('Test LB Vault Native', function () {
  let accounts: SignerWithAddress[];
  let VaultFactory: LBVaultV1Native__factory;
  let vault: LBVaultV1Native;

  before(async () => {
    VaultFactory = (await ethers.getContractFactory(
      'Bank'
    )) as LBVaultV1Native__factory;
  });

  beforeEach(async () => {
    vault = await VaultFactory.deploy('Personal LB Vault', 'Personal LB Vault');
    expect(vault.address).to.be.properAddress;
  });

  it('Should have some failure before creating strategy', async () => {});
});
