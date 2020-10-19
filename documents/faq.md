# FAQ

### What does "gas required exceeds allowance or always failing transaction" mean?
Sometimes this will be due to not enough gas being provided to complete the transaction because the contract state changed between when gas was estimated and when the transaction was actually estimated on chain. However more commonly this will be because the contract failed an assertion and web3 does not know how to interpret that assertion. Common reasons for failed assertions include: not enough token balance to execute transaction, insufficient permissions, and relying on contract state that hasn't been mined (committed to the chain) yet.

### Why am I seeing "insufficient funds for gas * price + value"
This is most likely because the signing account does not have enough Ether for the transaction. If you have just created the account, you will need to send some Ether in before you can make any transactions.
