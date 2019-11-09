# Enigma - Secret Benchmarking

## About

[Enigma](https://enigma.co/) is a secure computation protocol, where “secret nodes” perform computations over encrypted data. Enigma brings privacy to any kind of computation - not just transactions - helping to improve the adoption and usability of decentralized technologies.

This is a sample application which illustrates how to use enigma's secret contracts and ethereum's smart contracts to allow users to submit datasets and compare this data privately.

This sample contract can be built on for a variety of applications, including: 
- ensuring salary fairness without revealing individual compensations
- ensure the quote from a supplier falls within an acceptable range, without revealing competitors information
- verifying that some outcome from a study falls within a normal range, without revealing the underlying dataset

Key Features:
* client encrypts and transmits the dataset to the secret contract
* client encrypts and transmits the user’s quotes to the secret contract, and the user receives the correct decrypted output

## Stack

* next-js
* react
* mobx-state-tree
* web3

## Setup

### Secret Contracts
1. `npm install`
2. rename `.env-default` to `.env`
3. modify `.env` "BUILD_CONTRACTS_PATH"
4. `discovery compile`
5. `discovery start`
6. once started: `discovery migrate`

### Client
1. `cd client`
2. `npm install`
3. rename `.env-default` to `.env`
4. modify `.env` according to your setup
5. `npm run dev`

## Pitfalls
- After doing `discovery start` make sure you reset [metamask](https://ethereum.stackexchange.com/questions/44311/reset-metamask-nonce)
