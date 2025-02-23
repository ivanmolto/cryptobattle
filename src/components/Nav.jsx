import { NavLink } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  return (
    <>
      <div className="min-h-full font-montserrat">
        <Disclosure as="nav" className="bg-[#ff394a]">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex flex-row">
                        <svg
                          className="hidden h-8 w-auto md:block"
                          xmlns="http://www.w3.org/2000/svg"
                          height="36px"
                          viewBox="0 0 24 24"
                          width="36px"
                          fill="#FFFFFF"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none" />
                          <path d="M6 3H3v3c1.66 0 3-1.34 3-3zm8 0h-2c0 4.97-4.03 9-9 9v2c6.08 0 11-4.93 11-11zm-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7zm0 18h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11zm8 0h3v-3c-1.66 0-3 1.34-3 3zm-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7z" />
                        </svg>
                        <span className="ml-2 text-white text-2xl hidden h-8 w-auto md:block">
                          crypto battle
                        </span>
                      </div>
                      <svg
                        className="block h-8 w-auto md:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        height="36px"
                        viewBox="0 0 24 24"
                        width="36px"
                        fill="#FFFFFF"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M6 3H3v3c1.66 0 3-1.34 3-3zm8 0h-2c0 4.97-4.03 9-9 9v2c6.08 0 11-4.93 11-11zm-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7zm0 18h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11zm8 0h3v-3c-1.66 0-3 1.34-3 3zm-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7z" />
                      </svg>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex alighitems-baseline space-x-4">
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            "px-3 py-2 rounded-md text-sm font-medium" +
                            (isActive
                              ? " bg-red-700 text-white"
                              : " text-white hover:bg-red-400 hover:bg-opacity-75")
                          }
                        >
                          Home
                        </NavLink>
                        <NavLink
                          to="/battle"
                          className={({ isActive }) =>
                            "px-3 py-2 rounded-md text-sm font-medium" +
                            (isActive
                              ? " bg-red-700 text-white"
                              : " text-white hover:bg-red-400 hover:bg-opacity-75")
                          }
                        >
                          Battle
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6"></div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-blue-700 p-2 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 focus:ring-offset-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      "block px-3 py-2 rounded-md text-sm font-medium" +
                      (isActive
                        ? " bg-red-700 text-white"
                        : " text-white hover:bg-red-400 hover:bg-opacity-75")
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/battle"
                    className={({ isActive }) =>
                      "block px-3 py-2 rounded-md text-sm font-medium" +
                      (isActive
                        ? " bg-red-700 text-white"
                        : " text-white hover:bg-red-400 hover:bg-opacity-75")
                    }
                  >
                    Battle
                  </NavLink>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Nav;
