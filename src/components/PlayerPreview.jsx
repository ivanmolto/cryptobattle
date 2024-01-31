/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { XMarkIcon } from "@heroicons/react/20/solid";

function PlayerPreview({ address, onReset, label }) {
  return (
    <article className="border border-1 rounded-2xl bg-blue-100 text-base p-8">
      <label htmlFor="address" className="text-base font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 flex items-center justify-between">
        <div className="flex items-center space-x-4 truncate">
          <a
            href={`https://solana.fm/address/${address}`}
            className="text-blue-600 hover:underline"
            rel="noreferrer"
            target="_blank"
          >
            {address}
          </a>
        </div>
        <button
          onClick={onReset}
          className="rounded-md border border-1 bg-gray-50 border-gray-300 hover:bg-gray-100 focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
        >
          <XMarkIcon className="h-5 w-5 text-gray-700" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default PlayerPreview;

PlayerPreview.PropTypes = {
  address: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
