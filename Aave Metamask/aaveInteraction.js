// async function connectToMetaMask() {
//     try {
//         console.log('Attempting to connect to MetaMask...');
//         if (window.ethereum) {
//             console.log('MetaMask provider found.');
//             window.web3 = new Web3(window.ethereum);
//             const accounts = await window.ethereum.enable();
//             console.log('Accounts:', accounts);
//             if (accounts.length > 0) {
//                 document.getElementById('depositButton').disabled = false;
//                 console.log('Connected to MetaMask');
//             } else {
//                 console.log('Please connect to MetaMask');
//             }
//         } else {
//             console.log('MetaMask not found!');
//         }
//     } catch (error) {
//         console.error('Error connecting to MetaMask:', error);
//     }
// }
document.getElementById('connectButton').onclick = async function () {
    try {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            const accounts = await window.web3.eth.getAccounts();
            if (accounts.length > 0) {
                document.getElementById('depositButton').disabled = false;
                console.log('Connected to MetaMask');
            } else {
                console.log('Please connect to MetaMask');
            }
        } else {
            console.log('MetaMask not found!');
        }
    } catch (error) {
        console.error(error);
    }
}
