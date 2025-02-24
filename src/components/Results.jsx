/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { battle } from "../utils/api";
import PropTypes from "prop-types";
import Loading from "./Loading";
import withSearchParams from "./withSearchParams";
import { Link } from "react-router-dom";
import React from "react";
// import { InformationCircleIcon } from "@heroicons/react/24/outline";

const Card = ({ instance }) => {
  const { address, avatar_url, erc20s, erc721s, erc1155s } = instance;
  return (
    <div className="border border-1 rounded-2xl bg-red-100 text-base p-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2 w-96 lg:w-11/12">
          <div className="text-lg font-bold truncate">{address}</div>
          <div className="font-semibold italic">Notes</div>
        </div>
        <img
          className="rounded h-14 w-14"
          width={56}
          height={56}
          src={avatar_url}
          alt={`Avatar for ${address}`}
        />
      </div>
      <div className="w-full border-t border-gray-300"></div>
      <ul>
        <li className="flex items-center justify-between">
          <span>ERC20s</span> <span>{erc20s}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>ERC721s</span> <span>{erc721s}</span>
        </li>
        <li className="flex items-center justify-between">
          <span>ERC1155s</span> <span>{erc1155s}</span>
        </li>
      </ul>
    </div>
  );
};

Card.propTypes = {
  instance: PropTypes.shape({
    address: PropTypes.string,
    avatar_url: PropTypes.string.isRequired,
    erc20s: PropTypes.number,
    erc721s: PropTypes.number,
    erc1155s: PropTypes.number,
  }).isRequired,
};

class Results extends React.Component {
  state = {
    winner: null,
    loser: null,
    error: null,
    loading: true,
  };
  componentDidMount() {
    const sp = this.props.router.searchParams;
    const playerOne = sp.get("playerOne");
    const playerTwo = sp.get("playerTwo");

    battle([playerOne, playerTwo])
      .then((players) => {
        this.setState({
          winner: players[0],
          loser: players[1],
          error: null,
          loading: false,
        });
      })
      .catch(({ message }) => {
        this.setState({
          error: message,
          loading: false,
        });
      });
  }
  render() {
    const { winner, loser, error, loading } = this.state;
    if (loading === true) {
      return <Loading text="Battling" />;
    }

    if (error) {
      return <p className="text-center">{error}</p>;
    }
    return (
      <div className="bg-white font-montserrat">
        <main className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="font-montserrat text-2xl font-semibold mb-4">
              Results
            </div>
            <Link
              className="items-center justify-center rounded-md border border-1 bg-[#ff394a] px-6 py-2 text-sm font-medium text-white hover:bg-red-700 md:text-base mb-4"
              to="/battle"
            >
              Reset
            </Link>
          </div>
          <section className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Card instance={winner.instance} />
              <p className="flex text-center justify-center items-start gap-4">
                <span>
                  {winner.score === loser.score ? "Tie" : "Winner"} {"==>"}{" "}
                  {winner.score.toLocaleString()} points
                </span>
                {winner.score !== loser.score && (
                  <svg
                    width="80px"
                    height="80px"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                    className="-mt-10"
                  >
                    <g id="Layer-1">
                      <path
                        id="Path"
                        d="M0.411 128.039 C0.411 57.471 57.637 0.245 128.204 0.245 198.772 0.245 255.999 57.471 255.999 128.039 255.999 198.606 198.772 255.833 128.204 255.833 57.637 255.833 0.411 198.606 0.411 128.039 Z"
                        fill="#e5aa17"
                        fillOpacity="1"
                        stroke="none"
                      />
                      <path
                        id="Path-1"
                        d="M174.46 57.626 C174.46 49.745 81.795 49.745 81.795 57.626 L81.795 68.597 C81.795 95.176 102.553 116.707 128.101 116.707 153.701 116.707 174.408 95.176 174.408 68.597 174.46 67.928 174.46 57.626 174.46 57.626 Z"
                        fill="#ffffff"
                        fillOpacity="1"
                        stroke="none"
                      />
                      <path
                        id="Path-2"
                        d="M138.61 168.782 C138.61 174.448 118.109 174.448 118.109 168.782 L111.568 112.225 C111.568 106.559 145.151 106.559 145.151 112.225 Z"
                        fill="#ffffff"
                        fillOpacity="1"
                        stroke="none"
                      />
                      <path
                        id="Path-3"
                        d="M163.54 172.388 C160.45 166.31 145.924 164.662 128.308 164.662 128.257 164.662 128.257 164.662 128.205 164.662 128.153 164.662 128.153 164.662 128.102 164.662 110.486 164.662 96.012 166.31 92.87 172.388 89.728 178.517 90.912 204.066 90.912 204.375 L128.101 204.375 128.307 204.375 165.497 204.375 C165.497 204.066 166.631 178.517 163.54 172.388 Z"
                        fill="#ffffff"
                        fillOpacity="1"
                        stroke="none"
                      />
                      <path
                        id="Path-4"
                        d="M167.403 114.234 C158.75 114.234 151.745 107.796 151.436 107.487 150.148 106.302 150.096 104.293 151.281 103.057 152.466 101.769 154.475 101.717 155.762 102.902 155.814 102.954 162.562 109.135 169.464 107.744 173.894 106.868 177.705 102.954 180.796 96.155 184.041 89.046 184.504 83.432 182.238 79.414 179.044 73.8 171.112 72.821 171.009 72.769 169.258 72.563 168.021 71.018 168.228 69.318 168.434 67.567 169.979 66.331 171.679 66.537 172.142 66.588 182.856 67.825 187.698 76.324 191.046 82.196 190.634 89.716 186.513 98.781 182.547 107.538 177.19 112.637 170.648 113.925 169.566 114.131 168.434 114.234 167.403 114.234 Z M89.006 114.234 C97.66 114.234 104.665 107.796 104.974 107.487 106.262 106.302 106.313 104.293 105.128 103.057 103.944 101.769 101.935 101.717 100.647 102.902 100.596 102.954 93.848 109.135 86.946 107.744 82.516 106.868 78.704 102.954 75.614 96.155 72.369 89.046 71.905 83.432 74.171 79.414 77.365 73.8 85.297 72.821 85.4 72.769 87.152 72.563 88.388 71.018 88.182 69.318 87.976 67.567 86.431 66.331 84.731 66.537 84.267 66.588 73.553 67.825 68.712 76.324 65.363 82.196 65.776 89.716 69.896 98.781 73.862 107.538 79.219 112.637 85.761 113.925 86.843 114.131 87.976 114.234 89.006 114.234 Z"
                        fill="#ffffff"
                        fillOpacity="1"
                        stroke="none"
                      />
                    </g>
                  </svg>
                )}
              </p>
            </div>
            <div>
              <Card instance={loser.instance} />
              <p className="flex text-center justify-center items-start gap-4">
                <span>
                  {winner.score === loser.score ? "Tie" : "Loser"} {"==>"}{" "}
                  {loser.score.toLocaleString()} points
                </span>
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default withSearchParams(Results);
