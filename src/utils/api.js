import { AvaCloudSDK } from "@avalabs/avacloud-sdk";

const avaCloudSDK = new AvaCloudSDK({
  apiKey: import.meta.env.AVACLOUD_API_KEY,
  chainId: "43114", // Avalanche Mainnet
  network: "mainnet",
});

async function getBlockHeight() {
  const result = await avaCloudSDK.data.evm.blocks.getLatestBlocks({
    pageSize: 1,
  });
  return result.result.blocks[0].blockNumber;
}

async function listErc20Balances(address, blockNumber) {
  const result = await avaCloudSDK.data.evm.balances.listErc20Balances({
    blockNumber: blockNumber,
    pageSize: 10,
    address: address,
  });
  const balances = [];
  for await (const page of result) {
    balances.push(...page.result.erc20TokenBalances);
  }
  return balances;
}

async function fetchERC20Balances(address) {
  const blockResult = await getBlockHeight();
  const blockNumber = blockResult;
  const balanceResult = await listErc20Balances(address, blockNumber);
  const balances = balanceResult;
  return balances.length;
}

async function listERC721Balances(address) {
  const result = await avaCloudSDK.data.evm.balances.listErc721Balances({
    address,
    pageSize: 10,
  });
  const balances = [];
  for await (const page of result) {
    balances.push(...page.result.erc721TokenBalances);
  }
  return balances;
}

async function listERC1155Balances(address) {
  const result = await avaCloudSDK.data.evm.balances.listErc1155Balances({
    pageSize: 10,
    address: address,
  });
  const balances = [];
  for await (const page of result) {
    balances.push(...page.result.erc1155TokenBalances);
  }
  return balances;
}

async function fetchERC721Balances(address) {
  const result = await listERC721Balances(address);
  const balances = result;
  return balances.length;
}

async function fetchERC1155Balances(address) {
  const result = await listERC1155Balances(address);
  const balances = result;
  return balances.length;
}

function calculateScore(erc20s, erc721s, erc1155s) {
  return erc20s + erc721s + erc1155s;
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

function getAddress(address) {
  return address;
}

function getAvatar(address) {
  var avatar_url = `https://cdn.stamp.fyi/avatar/${address}?s=256`;
  return avatar_url;
}

function getUserData(player) {
  return Promise.all([
    getAddress(player),
    getAvatar(player),
    fetchERC20Balances(player),
    fetchERC721Balances(player),
    fetchERC1155Balances(player),
  ]).then(([address, avatar_url, erc20s, erc721s, erc1155s]) => ({
    instance: {
      address,
      avatar_url,
      erc20s,
      erc721s,
      erc1155s,
    },
    score: calculateScore(erc20s, erc721s, erc1155s),
  }));
}

export async function battle(players) {
  const contender = await Promise.all([
    getUserData(players[0]),
    getUserData(players[1]),
  ]);
  return sortPlayers(contender);
}
