require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth shift protect hope entire bridge syrup'; 
let testAccounts = [
"0x612cfa2b3b41cd685ef06e3992c533a91cc85ba561e18b0cabe28acfd7d6ad70",
"0xa67a64708fe53ff33bd989e43111f13b485023cbebc9df435acdbc8f737d7413",
"0x68d1b484f1dd0d5566fac6f0cd15950b49895a37fe137aa3e383b8654c18f874",
"0x1c362ab10354a1ae8ef908734fceb59b7bf74fd7a91ebcd1315d581b18b214e7",
"0x3be335e77968236ccee20e4189f3d9bb54d7f39bd704a9085b642b9548192672",
"0x5a0fa969020ab17f7f488b318986f57fe1cd242bbc80a35ac0383fb93687e69a",
"0xc7f3df3c64ae4332e882a8e3264a0ceaa65fc3b2df0a4ff4b9490b403294d746",
"0x45a65137da66d66afbd8010e99364c80d5edb378835e16edf29079019902270e",
"0x503dc41778a5e2bde975919ad4ffb2abce0efd8b03458f8b70881872bf873271",
"0xb3e374a11da59e6014e237baa7f34d68339e6d2b9e2e55e8d4a03e07bf14c1c1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

