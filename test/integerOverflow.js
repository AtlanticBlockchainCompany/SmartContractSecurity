
// const Reentrancy = artifacts.require('Reentrancy');

// contract('Reentrancy', accounts => {
//     beforeEach(async () => {
//         contractInstance = await Reentrancy.new();
//         await Reentrancy.deployed();
//     });
// });

// it('Can call the withdrawBalances function twice before first completion', async () => {
//     const account1 = await contractInstance.withdrawBalance({from: accounts[0], value: '5'});
//     contractInstance.withdrawBalance({from: accounts[0], value: '5'});

// });