// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/security/Pausable.sol';

contract StratManager is Ownable, Pausable {
    /// @dev SteakHut Contracts:
    /// {keeper} - Address to manage a few lower risk features of the strat incl rebalancing
    /// {strategist} - Address of the strategy author/deployer where strategist fee will go.
    /// {vault} - Address of the vault that controls the strategy's funds.
    /// {joeRouter} - Address of exchange to execute swaps.
    address public keeper;
    address public joeRouter;
    address public immutable vault;

    /// -----------------------------------------------------------
    /// Events
    /// -----------------------------------------------------------
    event SetKeeper(address keeper);
    event SetJoeRouter(address joeRouter);

    /**
     * @dev Initializes the base strategy.
     * @param _keeper address to use as alternative owner.
     * @param _joeRouter router to use for swaps
     * @param _vault address of parent vault.
     */
    constructor(address _keeper, address _joeRouter, address _vault) {
        keeper = _keeper;
        joeRouter = _joeRouter;
        vault = _vault;
    }

    // checks that caller is either owner or keeper.
    modifier onlyManager() {
        require(msg.sender == owner() || msg.sender == keeper, '!manager');
        _;
    }

    /// @notice Updates address of the strat keeper.
    /// @param _keeper new keeper address.
    function setKeeper(address _keeper) external onlyManager {
        require(_keeper != address(0), 'StratManager: 0 address');
        keeper = _keeper;

        emit SetKeeper(_keeper);
    }

    /// @notice Updates router that will be used for swaps.
    /// @param _joeRouter new joeRouter address.
    function setJoeRouter(address _joeRouter) external onlyOwner {
        require(_joeRouter != address(0), 'StratManager: 0 address');
        joeRouter = _joeRouter;

        emit SetJoeRouter(_joeRouter);
    }

    /// @notice Function to synchronize balances before new user deposit.
    /// Can be overridden in the strategy.
    function beforeDeposit() external virtual {}
}
