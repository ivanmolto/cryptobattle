/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";

function getTransactions(address) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      ApiKey: import.meta.env.VITE_SOLANAFM_API_KEY,
    },
  };

  return fetch(
    `https://api.solana.fm/v0/accounts/${address}/transactions?page=1`,
    options,
  ).then((response) => response.json());
}

function AccountApi({ address }) {
  const accountQuery = useQuery({
    queryKey: ["account", address],
    queryFn: () => getTransactions(address),
  });

  if (accountQuery.isLoading)
    return (
      <div className="bg-white font-montserrat">
        <main className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <div className="font-montserrat text-xl font-semibold mb-4 truncate">
            Account Hash {address}
          </div>
          <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
            Loading...
          </h2>
        </main>
      </div>
    );
  if (accountQuery.isError)
    return (
      <div className="bg-white font-montserrat">
        <main className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <div className="font-montserrat text-xl font-semibold mb-4 truncate">
            Account Hash {address}
          </div>
          <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
            Error: ${accountQuery.error.message}
          </h2>
        </main>
      </div>
    );
  console.log(accountQuery.data.status);
  if (accountQuery.data.status === "Bad Request")
    return (
      <div className="bg-white font-montserrat">
        <main className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <div className="font-montserrat text-xl font-semibold mb-4 truncate">
            Account Hash {address}
          </div>
          <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
            Sorry, {address} is not an account hash
          </h2>
        </main>
      </div>
    );

  const transactions = accountQuery.data.result.data;
  console.log(transactions);
  return (
    <div className="bg-white font-montserrat">
      <main className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="font-montserrat text-xl font-semibold mb-4 truncate">
          Account Hash {address}
        </div>
        <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
          {accountQuery.data.message}
        </h2>
        <div className="shadow sm:hidden">
          <ul
            role="list"
            className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
          >
            {transactions.map((transaction) => (
              <li key={transaction.signature}>
                <div
                  href={transaction.href}
                  className="block bg-white px-4 py-4 hover:bg-gray-50"
                >
                  <span className="flex items-center space-x-4">
                    <span className="flex flex-1 space-x-2 truncate">
                      <span className="flex flex-col truncate text-sm text-gray-500">
                        <span className="truncate">
                          {transaction.signature}
                        </span>
                        <span>
                          <span className="font-medium text-gray-500">
                            {transaction.slot}
                          </span>{" "}
                          <span
                            className={clsx(
                              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
                              {
                                "bg-green-100 text-green-800":
                                  transaction.confirmationStatus ===
                                  "finalized",
                                "bg-yellow-100 text-yellow-800":
                                  transaction.confirmationStatus ===
                                  "processing",
                                "bg-gray-100 text-gray-800":
                                  transaction.confirmationStatus === "failed",
                              },
                            )}
                          >
                            {transaction.confirmationStatus}
                          </span>
                        </span>
                        <time dateTime={transaction.datetime}>
                          {transaction.blockTime}
                        </time>
                      </span>
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden sm:block">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mt-2 flex flex-col">
              <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        className="bg-gray-100 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        Signature
                      </th>
                      <th
                        className="bg-gray-100 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        Slot
                      </th>
                      <th
                        className="hidden bg-gray-100 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"
                        scope="col"
                      >
                        Status
                      </th>
                      <th
                        className="bg-gray-100 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        Blocktime
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {transactions.map((transaction) => (
                      <tr key={transaction.signature} className="bg-white">
                        <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                          <div className="flex">
                            <span className="group inline-flex space-x-2 truncate text-sm">
                              <p className="truncate text-gray-500 group-hover:text-gray-900">
                                {transaction.signature}
                              </p>
                            </span>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                          <span className="font-medium text-gray-500">
                            {transaction.slot}
                          </span>
                        </td>
                        <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                          <span
                            className={clsx(
                              "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize",
                              {
                                "bg-green-100 text-green-800":
                                  transaction.confirmationStatus ===
                                  "finalized",
                                "bg-yellow-100 text-yellow-800":
                                  transaction.confirmationStatus ===
                                  "processing",
                                "bg-gray-100 text-gray-800":
                                  transaction.confirmationStatus === "failed",
                              },
                            )}
                          >
                            {transaction.confirmationStatus}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                          <time dateTime={transaction.datetime}>
                            {transaction.blockTime}
                          </time>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const Account = () => {
  let params = useParams();

  const accountId = params.accountId;

  return <AccountApi address={accountId} />;
};

export default Account;
