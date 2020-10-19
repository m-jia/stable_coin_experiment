pragma solidity 0.5.11;

import "@openzeppelin/upgrades/contracts/upgradeability/BaseAdminUpgradeabilityProxy.sol";
import "@openzeppelin/upgrades/contracts/upgradeability/UpgradeabilityProxy.sol";

/**
 * @title CADXProxy
 * @dev Extends from BaseAdminUpgradeabilityProxy with a constructor for
 * initializing the implementation and admin.
 */
contract CADXProxy is BaseAdminUpgradeabilityProxy, UpgradeabilityProxy {
    /**
     * Contract constructor.
     * @param _logic address of the initial implementation.
     * @param _admin Address of the proxy administrator.
     */
    constructor(address _logic, address _admin) UpgradeabilityProxy(_logic, bytes("")) public payable {
        assert(ADMIN_SLOT == bytes32(uint256(keccak256("eip1967.proxy.admin")) - 1));
        _setAdmin(_admin);
    }
}
