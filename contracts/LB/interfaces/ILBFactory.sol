// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import "./ILBPair.sol";
import "./IPendingOwnable.sol";

/// @title Liquidity Book Factory Interface
/// @author Trader Joe
/// @notice Required interface of LBFactory contract
interface ILBFactory is IPendingOwnable {
    /// @dev Structure to store the LBPair information, such as:
    /// - binStep: The bin step of the LBPair
    /// - LBPair: The address of the LBPair
    /// - createdByOwner: Whether the pair was created by the owner of the factory
    /// - ignoredForRouting: Whether the pair is ignored for routing or not. An ignored pair will not be explored during routes finding
    struct LBPairInformation {
        uint16 binStep;
        ILBPair LBPair;
        bool createdByOwner;
        bool ignoredForRouting;
    }
}