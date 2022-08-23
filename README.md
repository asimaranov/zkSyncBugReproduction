# zkSync bug reproduction

This command: `npx hardhat run scripts/deploy.ts --network zkSyncTest`
Produces the following error: 

```

ProviderError: Failed to serialize transaction: ToAddressIsNull
    at HttpProvider.request (/Users/andrey/projects/zkSyncBugReporoduction/node_modules/hardhat/src/internal/core/providers/http.ts:78:19)
    at LocalAccountsProvider.request (/Users/andrey/projects/zkSyncBugReporoduction/node_modules/hardhat/src/internal/core/providers/accounts.ts:188:34)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async EthersProviderWrapper.send (/Users/andrey/projects/zkSyncBugReporoduction/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)
```