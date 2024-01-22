import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-white font-montserrat mb-4">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline font-montserrat">
                Solana APIs
              </span>{" "}
              <span className="block text-blue-600 xl:inline font-montserrat">
                are Fun
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl font-montserrat">
              A perfect game for Solana nerds.{" "}
              <span className="hidden block:sm">
                No need to connect any wallet!
              </span>
              <br /> Are you ready for a battle with any hash account?
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md drop-shadow-md">
                <Link
                  to="/battle"
                  className="flex w-full items-center justify-center rounded-md border border-1 bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
