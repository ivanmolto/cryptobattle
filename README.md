# CRYPTO BATTLE

Solana APIs are Fun!
A casual game for Solana nerds. Are you ready for a battle against any hash account?
No need to connect any wallet.

- Fast, open and free: Lightning fast Solana on-chain data. Open and free forever.
- Surfacing the Signal: Profiling transactions, domains, and subdomains.
- Discovering opportunities in a friendly way: Performing due diligence while having fun in the Solana ecosystem.

A challenge sponsore by [SolanaFM](https://solana.fm)
Made for the [Encode x Solana Hackathon](https://www.encode.club/encodesolanahack) sponsored by the [Solana Foundation](https://solana.org/).

## Live website

You can find the Crypto Battle Fun live website at [cryptobattle.fun](https://www.cryptobattle.fun)

## Video pitch

This is the [video pitch that you can find here in the repo] or [you can download it from Pinata.cloud]

## Game Instructions

- Enter a Solana account hash for each player and submit.
  Each player is an instance and we will get the points count for each instance.
  The points are the sum of the number the transactions, domains, subdomains, and favourite domains.

- Click the Battle button and

- Check the results: the winner and the loser or just a tie. The winner is the player with more points.

You can also check the latest transactions for each player (instance).

## SolanaFM APIs

The SolanaFM APIs are free of charge but usages are gated by a rate-limiting middleware.
But to increase the rate limits we have generated our own `API Keys` to authenticate each request.

The API keys carry many privilegees, so be sure to keep them secured!
Do Your Own Research.
Do not share, do not save in publicly accessible areas such as GitHub, client-side code 😉, and so forth.
The APIs are used here only for having fun while participation in the hackathon.

## SolanaFM API endpoints used

- _Get a specific account_

  `GET` - `https://api.solana.fm/vo/accounts/{hash}`
  **This endpoint returns you the account data related to the account that you queried for given the account hash**

  To get the friendly name of an account hash.

- _Get Transactions Of An Account_

  `GET` - `https://api.solana.fm/v0/accounts/{hash}/transactions`
  **Retrieve a list of finalised transactions that the account is involved in**
  Please not that the maximum number of transactions retrieved per batch is 1000

  To get the transactions of an account hash.

- _Get Domain/Subdomains Owned By An Account_

  `GET` - `https://api.solana.fm/vo/domains/bonfida/{hash}`
  **This endpoint retrieves all domains and subdomains owned by the provided account hash**

  To get the domains of an account hash.

- _Get User's Favourite Domains_

  `GET` - `https://api.solana.fm/vo/domains/bonfida/favourites/{hash}`

  **This endpoint returns you a list of domains that are set as favourite by the account hash provided**

  To get the favourite domains of an account hash.

- _Get An Account's Subdomains_

  `GET` - `https://api.solana.fm/vo/domains/bonfida/subdomains/{hash}`

  **This endpoint returns you subdomains that are owned by the given account hash**

  To get the subdomains of an account hash.

## What are Bonfida Domains

Solana domains are a feature in the Solana blockchain that provides a human-readale way of identifying resources in the network. Instead of using complex addresses, users can register and use domain names to represent their accounts, contracts, or services. This simplifies the process of sending transactions, accessing decentralised applications, and sharing information on the Solana network.

## Tech Stack

- [React](https://react.dev/)
- [SolanaFM](https://solana.fm) APIs
- [TailwindCSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [React Query](https://tanstack.com/query/v3)
- [Vite](https://vitejs.dev)

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## License

The code is licensed under a MIT License.
