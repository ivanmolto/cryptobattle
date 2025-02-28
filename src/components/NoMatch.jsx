import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <div className="mt-28 mb-2 min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 font-montserrat">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-bold tracking-tight text-[#ff394a] sm:text-5xl font-montserrat">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-montserrat">
                  Page not found
                </div>
                <p className="mt-1 text-base text-gray-500">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  to="/"
                  className="font-montserrat inline-flex items-center rounded-md border border-transparent bg-[#ff394a] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Go back home
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default NoMatch;
