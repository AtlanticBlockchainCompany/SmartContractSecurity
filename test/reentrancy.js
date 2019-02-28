
const Reentrancy = artifacts.require('Reentrancy');

contract('Reentrancy', accounts => {
    beforeEach(async () => {
        contractInstance = await Reentrancy.new();
        await Reentrancy.deployed();
        console.log("BD Initial Balance of A0: ", parseFloat(web3.utils.fromWei(await web3.eth.getBalance(accounts[0]), 'ether')));
        console.log("BD Initial Balance of A1: ", parseFloat(web3.utils.fromWei(await web3.eth.getBalance(accounts[1]), 'ether')));
        await contractInstance.depositAmount({ from: accounts[0], value: '5000000000000000000' })
        await contractInstance.depositAmount({ from: accounts[1], value: '5000000000000000000' })
        console.log("AD Initial Balance of A0: ", parseFloat(web3.utils.fromWei(await web3.eth.getBalance(accounts[0]), 'ether')));
        console.log("AD Initial Balance of A1: ", parseFloat(web3.utils.fromWei(await web3.eth.getBalance(accounts[1]), 'ether')));
    });

    it('Can call the withdrawBalances function twice before first completion', async () => {
        contractInstance.withdrawBalance({ from: accounts[0]});
        await contractInstance.withdrawBalance({ from: accounts[0]});
        console.log("Now entering Promise")
        let promise = new Promise((resolve, reject) => {
            setTimeout(async () => {
                const balanceOfA0 = parseFloat(web3.utils.fromWei(await web3.eth.getBalance(accounts[0]), 'ether'));
                const balanceOfA1 = parseFloat(web3.utils.fromWei(await web3.eth.getBalance(accounts[1]), 'ether'));
                console.log("Balance of A0: ", balanceOfA0);
                console.log("Balance of A1: ", balanceOfA1);
                resolve(true);
            }, 3000);
        })
        return promise;
    });
});

// promise2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({
//             message: "The man likes to keep his word",
//             code: "aManKeepsHisWord"
//         });
//     }, 10 * 1000);
// });
// console.log(promise2);