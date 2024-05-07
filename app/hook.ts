import { mnemonicToWalletKey } from "ton-crypto";
import { fromNano, internal, TonClient, WalletContractV4 } from "ton";
import { getHttpEndpoint } from "@orbs-network/ton-access";
// EQAi8dpzsGEQSIiGTFvujIY2cSMc1LkaDOCb3xSEtWyMCxzw
export async function main() {
  const mnemonic = 'syrup rent zoo limit carbon chair now animal attract melody flee step chair hire oil struggle fury range steel net super detail long lobster';
  const key = await mnemonicToWalletKey(mnemonic.split(' '));
  const wallet = WalletContractV4.create({publicKey: key.publicKey, workchain: 0}); // 0 - это TON

  const endpoint = await getHttpEndpoint({network: 'testnet'});
  const client = new TonClient({ endpoint });

  if (!await client.isContractDeployed(wallet.address)) {
    return console.log('wallet is not deployed');
  }

  console.log('wallet is deployed', wallet.address)

  const ballance = await client.getBalance(wallet.address);
  console.log(fromNano(ballance))

 const walletContract = client.open(wallet);
 const seqno = await walletContract.getSeqno();
async function getBallance() {
    return await client.getBalance(wallet.address);
}

//  await walletContract.sendTransfer({
//    secretKey: key.secretKey,
//    seqno: seqno,
//    messages: [
//      internal({
//        // to: "EQA4V9tF4lY2S_J-sEQR7aUj9IwW-Ou2vJQlCn--2DLOLR5e",
//        to: "EQA4V9tF4lY2S_J-sEQR7aUj9IwW-Ou2vJQlCn--2DLOLR5e",
//        value: "0.01",
//        body: "Hello",
//        bounce: false
//      })
//    ]
//  })

  // let curSeqno = seqno;
  // while(curSeqno == seqno) {
  //   console.log("waiting for transaction to confirm...")
  //   await sleep(1500)
  //   curSeqno = await walletContract.getSeqno();
  // }
  // console.log('transaction confirmed!')
  return fromNano(ballance);
}
// EQChHpu8-rFBQyVCXJtT1aTwODTBc1dFUAEatbYy11ZLcBST

function sleep(ms:number) {
  return new Promise(res=>setTimeout(res,ms));
}