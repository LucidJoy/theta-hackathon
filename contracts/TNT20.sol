// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TNT20 is ERC20, ERC20Burnable, Ownable {
    address public admin;

    event UpdateAdmin(address newAdmin);

    constructor() payable ERC20("GainxReedem", "RGNX") {
        admin = msg.sender;
        emit UpdateAdmin(admin);
    }

    modifier adminOnly() { 
        require(msg.sender == admin, "Only admin can make this call");
        _;
    }

    function mint(address receiver, uint256 amount) payable public adminOnly {
        _mint(receiver, amount * 10 ** decimals());
    }

    function updateAdmin(address adminAddr) external adminOnly {
        admin = adminAddr;
        emit UpdateAdmin(admin);
    }
}
