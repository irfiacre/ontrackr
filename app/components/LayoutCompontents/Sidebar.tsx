"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { generateRandomString } from "@/app/helpers/helperMethods";

interface StateInterface {
  isHidden: boolean;
}

const Sidebar = () => {
  const menuItems = [
    {
      title: "Dashboard",
      link: "/",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        ></path>
      ),
    },
    {
      title: "Today",
      link: "/today",
      icon: (
        <span className="text-primary-dark-1 border border-primary-dark-1 rounded-sm text-xs px-1 py-0 bg-primary-dark-1 text-white">
          {new Date().getDate()}
        </span>
      ),
    },
    {
      title: "Upcoming",
      link: "/upcoming",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
        />
      ),
    },
    {
      title: "My Calendar",
      link: "/calendar",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
          />
        </svg>
      ),
    },
  ];
  const userInfo = {
    username: "janeDoe",
    firstName: "Jane",
    lastName: "Doe",
    image:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  };

  const [state, setState] = useState<StateInterface>({
    isHidden: false,
  });
  const changeHiddenStatus = () =>
    setState(
      (prevState: StateInterface): StateInterface => ({
        ...prevState,
        isHidden: prevState.isHidden ? false : true,
      })
    );
  return (
    <div className="flex flex-col flex-shrink-0 antialiased bg-gray-50 text-gray-800 min-h-screen">
      <div
        className={`relative flex flex-col top-0 left-0 bg-white h-full border-r ${
          state.isHidden ? "w-12/12" : "w-64"
        }`}
      >
        <div
          className={`flex items-center h-14 border-b ${
            state.isHidden ? "px-2" : "justify-between"
          }`}
        >
          <div
            className={`flex items-center ml-4 ${
              state.isHidden ? "hidden" : ""
            }`}
          >
            <div className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Img" src={userInfo.image} />
              </div>
              {/* <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1" role="none">
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-3"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div> */}
            </div>
            <strong className="text-xl tracking-wide truncate text-center align-middle text-primary-dark-1">
              {`${userInfo.firstName} ${userInfo.lastName}`}
            </strong>
          </div>
          <div
            onClick={changeHiddenStatus}
            className="mr-4 cursor-pointer btn btn-ghost text-primary-dark-1 hover:bg-primary-0 hover:bg-opacity-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            {menuItems.map((elt) => (
              <li key={generateRandomString("sidebarTitle")}>
                <Link
                  href={elt.link}
                  className="relative flex flex-row items-center h-11 focus:outline-none
                    hover:bg-primary-0 hover:bg-opacity-25 text-primary-dark-1 hover:text-primary-3
                    focus:bg-primary-0 focus:bg-opacity-20 focus:text-primary-dark-0
                      border-l-4 border-transparent pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    {elt.title !== "Today" ? (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {elt.icon}
                      </svg>
                    ) : (
                      elt.icon
                    )}
                  </span>
                  <span
                    className={`ml-2 text-sm tracking-wide truncate ${
                      state.isHidden ? "hidden" : ""
                    }`}
                  >
                    {elt.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
