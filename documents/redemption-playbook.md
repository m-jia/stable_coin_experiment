# Redemption Playbook

This is a checklist/reference sheet for redeeming CADX for CAD.

# Overview

CADX may ONLY be redeemed by verified customers. CAD may only leave the CADX collateralization account when a corresponding amount of CADX has been burned. 

# Checklist

- [ ] Customer is verified
- [ ] We have created a redemption (burn) wallet for the customer
- [ ] The customer has deposited CADX into the redemption wallet
- [ ] Any required checks for redemption are run
- [ ] Burn the CADX in the redemption wallet
- [ ] Disburse funds from collateralization account to the customer

# Command Examples

Burn CADX on a ledger
```bash
cadx burn --amount TOKEN_AMOUNT_TO_BURN_IN_DECIMAL --sigmethod ledger
```

Burn CADX using a private key
```bash
cadx burn --amount TOKEN_AMOUNT_TO_BURN_IN_DECIMAL --sigmethod privkey
```
