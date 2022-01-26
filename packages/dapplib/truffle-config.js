require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind artist hunt problem off strong'; 
let testAccounts = [
"0x8bfac76380d0d312c5a4cb5ead4b0ade8b0e9bf22bce5a55ec5c899237c86574",
"0xe860b2609125c646c70ff3df9cb2deee8f514aba39c4eba703a1f6f5b428e28e",
"0xf395f47e12565b566bc1cdd57444449bb1a6c737e6f3c0446bff2771422cc42e",
"0xaa3ba98b2f6660922a792b6be74f1c63b46a2672c0c8cf922d6ae9c994efe087",
"0x8edd2cbe07ebb20bf0208e183e700a7226035ec986c94cb67efcd00a9b34a7b5",
"0x28254d335f932e0fa16673ca0d13c646f0929147ffd6efc285a5078d806a3966",
"0x265fbd355a8e5499f13ddc74adc83c337fce18484a095880ab5eda08b9686ec3",
"0x972204d985f7df0801e2e7ff21f1c7a34d6019400c0bb9865d9142c291a23b8d",
"0x974382365b49f92579bf9abb322518094e4e3ae2cc2af543f1b08d018bb8a333",
"0x7ae5efe853ae90f6c6defed4ad4ad2e13d458263bd4d05e2d8c204cb25525e62"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


