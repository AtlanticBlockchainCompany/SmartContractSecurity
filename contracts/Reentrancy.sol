pragma solidity ^0.5.0;

/** @title Reentrancy */

contract Reentrancy {

    ///
    /// State Variables
    ///

    mapping (address => uint) private userBalances;

    ///
    /// Functions
    ///

    function depositAmount()
    public
    payable
    {
        userBalances[msg.sender] = msg.value;
    }

    // Weak function, subject to reentrancy
    function withdrawBalance() 
    public 
    payable 
    {
        uint amountToWithdraw = userBalances[msg.sender];
        msg.sender.transfer(amountToWithdraw); 
        // At this point, the caller's code is executed, and can call withdrawBalance again
        userBalances[msg.sender] = 0;
    }

}