cadx
====

CADX CLI tool

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm link
$ cadx COMMAND
running command...
$ cadx --help [COMMAND]
USAGE
  $ cadx COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [cadx](#cadx)
- [Usage](#usage)
- [Commands](#commands)
  - [`cadx burn`](#cadx-burn)
  - [`cadx help [COMMAND]`](#cadx-help-command)
  - [`cadx issuer:member:add`](#cadx-issuermemberadd)
  - [`cadx issuer:member:list`](#cadx-issuermemberlist)
  - [`cadx issuer:member:remove`](#cadx-issuermemberremove)
  - [`cadx issuer:mint:list`](#cadx-issuermintlist)
  - [`cadx issuer:mint:propose`](#cadx-issuermintpropose)
  - [`cadx issuer:mint:reject`](#cadx-issuermintreject)
  - [`cadx issuer:mint:send`](#cadx-issuermintsend)
  - [`cadx supply`](#cadx-supply)
  - [`cadx transfer`](#cadx-transfer)

## `cadx burn`

```
USAGE
  $ cadx burn

OPTIONS
  --amount=amount              (required) The amount of burn (e.g. 154.23)

  --gaspricegwei=gaspricegwei  Override the default behavior of determining gas price based on previous few blocks by
                               using a user specified gas price in Gwei. 1 Gwei is 1e9 Wei (a giga-wei).

  --hdwpath=hdwpath            Specify a custom HD wallet derivation path, or just skip the prompt for non-interactive
                               signing.

  --network=ropsten|mainnet    [default: ropsten] Ethereum network to use

  --nobroadcast                Sign but do not broadcast the transaction. Output the signed transaction to stdout.

  --nonce=nonce                Override the default behavior of getting the next nonce by using a user specified nonce.
                               Useful for retrying or queuing transactions.

  --sigmethod=privkey|ledger   (required) Signature method for signing the transaction

  --skipconfirm                Skip the confirmation and directly broadcast the transaction. Useful for non-interactive
                               use.
```

_See code: [src/commands/burn.ts](https://github.com/stably-catalx/cadx-ethereum-contracts/blob/master/cli-tools/cadx/src/commands/burn.ts)_

## `cadx help [COMMAND]`

display help for cadx

```
USAGE
  $ cadx help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `cadx issuer:member:add`

```
USAGE
  $ cadx issuer:member:add

OPTIONS
  --address=address            (required) The new issuance member to add

  --gaspricegwei=gaspricegwei  Override the default behavior of determining gas price based on previous few blocks by
                               using a user specified gas price in Gwei. 1 Gwei is 1e9 Wei (a giga-wei).

  --hdwpath=hdwpath            Specify a custom HD wallet derivation path, or just skip the prompt for non-interactive
                               signing.

  --network=ropsten|mainnet    [default: ropsten] Ethereum network to use

  --nobroadcast                Sign but do not broadcast the transaction. Output the signed transaction to stdout.

  --nonce=nonce                Override the default behavior of getting the next nonce by using a user specified nonce.
                               Useful for retrying or queuing transactions.

  --sigmethod=privkey|ledger   (required) Signature method for signing the transaction

  --skipconfirm                Skip the confirmation and directly broadcast the transaction. Useful for non-interactive
                               use.
```

_See code: [src/commands/issuer/member/add.ts](https://github.com/stably-catalx/cadx-ethereum-contracts/blob/master/cli-tools/cadx/src/commands/issuer/member/add.ts)_

## `cadx issuer:member:list`

```
USAGE
  $ cadx issuer:member:list

OPTIONS
  --network=ropsten|mainnet  [default: ropsten] Ethereum network to use
```

_See code: [src/commands/issuer/member/list.ts](https://github.com/stably-catalx/cadx-ethereum-contracts/blob/master/cli-tools/cadx/src/commands/issuer/member/list.ts)_

## `cadx issuer:member:remove`

```
USAGE
  $ cadx issuer:member:remove

OPTIONS
  --address=address            (required) The issuance member to remove

  --gaspricegwei=gaspricegwei  Override the default behavior of determining gas price based on previous few blocks by
                               using a user specified gas price in Gwei. 1 Gwei is 1e9 Wei (a giga-wei).

  --hdwpath=hdwpath            Specify a custom HD wallet derivation path, or just skip the prompt for non-interactive
                               signing.

  --network=ropsten|mainnet    [default: ropsten] Ethereum network to use

  --nobroadcast                Sign but do not broadcast the transaction. Output the signed transaction to stdout.

  --nonce=nonce                Override the default behavior of getting the next nonce by using a user specified nonce.
                               Useful for retrying or queuing transactions.

  --sigmethod=privkey|ledger   (required) Signature method for signing the transaction

  --skipconfirm                Skip the confirmation and directly broadcast the transaction. Useful for non-interactive
                               use.
```

_See code: [src/commands/issuer/member/remove.ts](https://github.com/stably-catalx/cadx-ethereum-contracts/blob/master/cli-tools/cadx/src/commands/issuer/member/remove.ts)_

## `cadx issuer:mint:list`

```
USAGE
  $ cadx issuer:mint:list

OPTIONS
  --network=ropsten|mainnet  [default: ropsten] Ethereum network to use
```

_See code: [src/commands/issuer/mint/list.ts](https://github.com/stably-catalx/cadx-ethereum-contracts/blob/master/cli-tools/cadx/src/commands/issuer/mint/list.ts)_

## `cadx issuer:mint:propose`

```
USAGE
  $ cadx issuer:mint:propose

OPTIONS
  --amount=amount              (required) The amount of propose (e.g. 154.23)

  --gaspricegwei=gaspricegwei  Override the default behavior of determining gas price based on previous few blocks by
                               using a user specified gas price in Gwei. 1 Gwei is 1e9 Wei (a giga-wei).

  --hdwpath=hdwpath            Specify a custom HD wallet derivation path, or just skip the prompt for non-interactive
                               signing.

  --network=ropsten|mainnet    [default: ropsten] Ethereum network to use

  --nobroadcast                Sign but do not broadcast the transaction. Output the signed transaction to stdout.

  --nonce=nonce                Override the default behavior of getting the next nonce by using a user specified nonce.
                               Useful for retrying or queuing transactions.

  --sigmethod=privkey|ledger   (required) Signature method for signing the transaction

  --skipconfirm                Skip the confirmation and directly broadcast the transaction. Useful for non-interactive
                               use.

  --to=to                      (required) The new issuance member to add
```

_See code: [src/commands/issuer/mint/propose.ts](https://github.com/stably-catalx/cadx-ethereum-contracts/blob/master/cli-tools/cadx/src/commands/issuer/mint/propose.ts)_

## `cadx issuer:mint:reject`

```
USAGE
  $ cadx issuer:mint:reject

OPTIONS
  --gaspricegwei=gaspricegwei  Override the default behavior of determining gas price based on previous few blocks by
                               using a user specified gas price in Gwei. 1 Gwei is 1e9 Wei (a giga-wei).

  --hdwpath=hdwpath            Specify a custom HD wallet derivation path, or just skip the prompt for non-interactive
                               signing.

  --index=index                (required) The index of the pending mint to reject

  --network=ropsten|mainnet    [default: ropsten] Ethereum network to use

  --nobroadcast                Sign but do not broadcast the transaction. Output the signed transaction to stdout.

  --nonce=nonce                Override the default behavior of getting the next nonce by using a user specified nonce.
                               Useful for retrying or queuing transactions.

  --sigmethod=privkey|ledger   (required) Signature method for signing the transaction

  --skipconfirm                Skip the confirmation and directly broadcast the transaction. Useful for non-interactive
                               use.
```

_See code: [src/commands/issuer/mint/reject.ts](https://github.com/stably-catalx/cadx-ethereum-contracts/blob/master/cli-tools/cadx/src/commands/issuer/mint/reject.ts)_

## `cadx issuer:mint:send`

```
USAGE
  $ cadx issuer:mint:send

OPTIONS
  --gaspricegwei=gaspricegwei  Override the default behavior of determining gas price based on previous few blocks by
                               using a user specified gas price in Gwei. 1 Gwei is 1e9 Wei (a giga-wei).

  --hdwpath=hdwpath            Specify a custom HD wallet derivation path, or just skip the prompt for non-interactive
                               signing.

  --index=index                (required) The index of the pending mint to send

  --network=ropsten|mainnet    [default: ropsten] Ethereum network to use

  --nobroadcast                Sign but do not broadcast the transaction. Output the signed transaction to stdout.

  --nonce=nonce                Override the default behavior of getting the next nonce by using a user specified nonce.
                               Useful for retrying or queuing transactions.

  --sigmethod=privkey|ledger   (required) Signature method for signing the transaction

  --skipconfirm                Skip the confirmation and directly broadcast the transaction. Useful for non-interactive
                               use.
```

_See code: [src/commands/issuer/mint/send.ts](https://github.com/stably-catalx/cadx-ethereum-contracts/blob/master/cli-tools/cadx/src/commands/issuer/mint/send.ts)_

## `cadx supply`

```
USAGE
  $ cadx supply

OPTIONS
  --network=ropsten|mainnet  [default: ropsten] Ethereum network to use
```

_See code: [src/commands/supply.ts](https://github.com/stably-catalx/cadx-ethereum-contracts/blob/master/cli-tools/cadx/src/commands/supply.ts)_

## `cadx transfer`

```
USAGE
  $ cadx transfer

OPTIONS
  --amount=amount              (required) The amount of transfer (e.g. 154.23)

  --gaspricegwei=gaspricegwei  Override the default behavior of determining gas price based on previous few blocks by
                               using a user specified gas price in Gwei. 1 Gwei is 1e9 Wei (a giga-wei).

  --hdwpath=hdwpath            Specify a custom HD wallet derivation path, or just skip the prompt for non-interactive
                               signing.

  --network=ropsten|mainnet    [default: ropsten] Ethereum network to use

  --nobroadcast                Sign but do not broadcast the transaction. Output the signed transaction to stdout.

  --nonce=nonce                Override the default behavior of getting the next nonce by using a user specified nonce.
                               Useful for retrying or queuing transactions.

  --sigmethod=privkey|ledger   (required) Signature method for signing the transaction

  --skipconfirm                Skip the confirmation and directly broadcast the transaction. Useful for non-interactive
                               use.

  --to=to                      (required) The recipient of the transferred tokens
```

_See code: [src/commands/transfer.ts](https://github.com/stably-catalx/cadx-ethereum-contracts/blob/master/cli-tools/cadx/src/commands/transfer.ts)_
<!-- commandsstop -->
