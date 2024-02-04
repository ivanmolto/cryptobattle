function calculateScore(transactions, domains, favorites, subdomains) {
  return transactions + domains + favorites + subdomains;
}

function sortPlayers(players) {
  return players.sort((a, b) => b.score - a.score);
}

function getAddress(address) {
  return address;
}

async function getName(address) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      ApiKey: import.meta.env.VITE_SOLANAFM_API_KEY,
    },
  };
  try {
    const response = await fetch(
      `https://api.solana.fm/v0/accounts/${address}`,
      options,
    );
    const display = await response.json();
    if (display.code !== 400) {
      var name = display.result.data.friendlyName;
    } else {
      name = "-";
    }
    return name;
  } catch (err) {
    return console.error(err);
  }
}

async function getTransactions(address) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      ApiKey: import.meta.env.VITE_SOLANAFM_API_KEY,
    },
  };
  try {
    const response = await fetch(
      `https://api.solana.fm/v0/accounts/${address}/transactions?page=1`,
      options,
    );
    const display = await response.json();
    var transactions = display.result.data.length;
    return transactions;
  } catch (err) {
    return 0;
  }
}

async function getDomains(address) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      ApiKey: import.meta.env.VITE_SOLANAFM_API_KEY,
    },
  };
  try {
    const response = await fetch(
      `https://api.solana.fm/v0/domains/bonfida/${address}`,
      options,
    );
    const display = await response.json();
    var domains = display.result[0].domains.length;
    return domains;
  } catch (err) {
    return console.error(err);
  }
}

async function getFavorites(address) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      ApiKey: import.meta.env.VITE_SOLANAFM_API_KEY,
    },
  };
  try {
    const response = await fetch(
      `https://api.solana.fm/v0/domains/bonfida/favourites/${address}`,
      options,
    );
    const display = await response.json();
    var favorites = display.result.domains.length;
    return favorites;
  } catch (err) {
    return console.error(err);
  }
}

async function getSubdomains(address) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  try {
    const response = await fetch(
      `https://api.solana.fm/v0/domains/bonfida/subdomains/${address}`,
      options,
    );
    const display = await response.json();
    var subdomains = display.result.subdomains.length;
    return subdomains;
  } catch (err) {
    return console.error(err);
  }
}

function getUserData(player) {
  return Promise.all([
    getAddress(player),
    getName(player),
    getTransactions(player),
    getDomains(player),
    getFavorites(player),
    getSubdomains(player),
  ]).then(([address, name, transactions, domains, favorites, subdomains]) => ({
    instance: {
      address,
      name,
      transactions,
      domains,
      favorites,
      subdomains,
    },
    score: calculateScore(transactions, domains, favorites, subdomains),
  }));
}

export async function battle(players) {
  const contender = await Promise.all([
    getUserData(players[0]),
    getUserData(players[1]),
  ]);
  return sortPlayers(contender);
}
