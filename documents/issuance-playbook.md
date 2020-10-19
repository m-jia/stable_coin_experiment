# Issuance Playbook

This is a checklist/reference sheet for doing new CADX issuance.

# Overview

CADX may ONLY be issued to [verified customers](#verified-customer). Any new issuance (token mint) may only happen when a verified customer has deposited CAD into the [collateralization account](#collateralization-account). 

When new CAD is deposited into the account that collateralizes CADX and the funds are [settled](#settled-funds) we may proceed with token issuance.

# Checklist

- [ ] Customer is verified
- [ ] Customer address to mint CADX into is valid
- [ ] New CAD in the collateralization account is settled
- [ ] New issuance of CADX would not undercollateralize the account taking into account existing pending mints
- [ ] Any required checks for new issuance are run
- [ ] Propose new mint
- [ ] Verify and send mint proposal after verification wait period

# Command Examples

See all currently pending mint proposals
```bash
cadx issuer:mint:list
```

Propose a new mint and sign on Ledger device
```bash
cadx issuer:mint:propose --to DESTINATION_ADDRESS --amount TOKEN_AMOUNT_IN_DECIMAL --sigmethod ledger
```

Reject a mint proposal
```bash
cadx issuer:mint:reject --index PROPOSAL_INDEX_TO_REJECT --sigmethod ledger
```

Approve and send a mint proposal
```bash
cadx issuer:mint:send --index PROPOSAL_INDEX_TO_SEND --sigmethod ledger
```

Propose a new mint and sign on Ledger device with a custom HD wallet derivation path
```bash
cadx issuer:mint:propose --to DESTINATION_ADDRESS --amount TOKEN_AMOUNT_IN_DECIMAL --sigmethod ledger --hdwpath YOUR_CUSTOM_HDW_PATH
```

Sign a mint proposal tx using Ledger device but don't broadcast. This is useful if you want to sign transactions on an offline device.
```bash
cadx issuer:mint:propose --to DESTINATION_ADDRESS --amount TOKEN_AMOUNT_IN_DECIMAL --sigmethod ledger --nobroadcast
```

# Terminology

## Settled Funds
Funds are considered settled when they are no longer reversible. Fund finality is not always possible in a reasonable amount of time, so it is up to the custodian to risk manage with transaction size limits and settlement periods.

## Verified Customer
A verified customer is one that has gone through identity verification and deemed low risk enough to do business with. This is also known as Know Your Customer (KYC) or Customer Identitification Program (CIP) checks. 

## Collateralization Account
The account that holds the collateral for the token that token holders can redeem against.
