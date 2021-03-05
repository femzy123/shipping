import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from '../../contexts/AuthContext'
import { auth } from "../../firebase";
import Link from 'next/link';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const Navigation = () => {
  const { currentUser } = useAuth();
  const router = useRouter();
  const [hidden, setHidden] = useState("hidden");

  const dropdown = () => hidden === "hidden" ? setHidden("") : setHidden("hidden");

  const signOut = () => {
    auth.signOut();
    router.push('/login');
  }

  console.log(currentUser);
  return (
    <>
      <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-3 py-2">
        <div className="flex-1 flex justify-between items-center logo">
          <a href="https://splendidpackaging.com/">
            <img src="https://splendidpackaging.com/wp-content/uploads/2020/02/WhatsApp-Image-2017-11-20-at-23.56.32-300x112.jpeg" />
          </a>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden lg:flex lg:items-center lg:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  href="/calculator"
                >
                  Calculator
                </a>
              </li>
              {currentUser ? (
                <>
                  <li>
                    <a
                      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                      href="/"
                    >
                      Dashboard
                    </a>
                  </li>
                  {/* <li>
                    <a
                      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 text-sm capitalize"
                      href="#"
                    >
                      Welcome,{" "}
                      <span className="font-semibold">
                        {currentUser.displayName}
                      </span>
                    </a>
                  </li>
                  <li>
                    <span
                      className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 cursor-pointer"
                      onClick={signOut}
                    >
                      Sign Out
                    </span>
                  </li> */}
                  <li>
                    <div
                      className="lg:p-4 py-3 px-0 border-b-2 border-transparent hover:border-indigo-400 cursor-pointer relative"
                      id="menu-btn"
                    >
                      Welcome,{" "}
                      <span className="font-semibold mr-2">
                        {currentUser.displayName}
                      </span>
                      <ExpandMoreIcon fontSize="small" onClick={dropdown} />
                      <div
                        className={`absolute right-0 mt-1 py-1 w-32 bg-white rounded-md shadow-xl z-20 ${hidden}`}
                        id="dropdown"
                      >
                        <span
                          className="lg:p-4 py-3 px-0 block border-b-2 border-transparent cursor-pointer hover:bg-blue-50"
                          onClick={signOut}
                        >
                          Sign Out
                        </span>
                      </div>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/login" passHref>
                      <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                        Login
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/register" passHref>
                      <a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
                        Sign Up
                      </a>
                    </Link>
                  </li>
                </>
              )}
              <li>
                {/* <form className="w-full max-w-sm">
                  <div className="flex items-center py-2">
                    <input
                      className="appearance-none block w-full border rounded-r-none bg-gray-200 text-gray-500 py-2 px-2 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      placeholder="Search"
                    />
                    <button
                      className="flex-shrink-0 bg-blue-500 hover:bg-teal-700 text-sm text-white py-2 px-2 rounded-l-none"
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                </form> */}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
