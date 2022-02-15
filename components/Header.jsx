import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import openSeaLogo from '../public/opensea.png'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

function Header() {
  const style = {
    wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex `,
    logoContainer: `flex items-center cursor-pointer`,
    logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
    searchBar: ` flex flex-1 mx-[0.8rem] w-max-[520px] w-[300px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: ` flex items-center justify-end`,
    headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer pt-2`,
    headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer pt-1`,
  }

  const [toggleResponsive, setToggleResponsive] = React.useState(true)

  return (
    <nav class="bg-[#04111d] px-[1.2rem] py-[0.8rem]">
      <div class="container mx-auto ">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div className="m-1">
                <Image src={openSeaLogo} height={40} width={40} />
              </div>
              <div className="transform text-2xl font-bold text-white transition-colors duration-200 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl">
                <Link href="/">OpenSea</Link>
              </div>
              {/* <!-- Search input on desktop screen --> */}
              <div class="mx-10 hidden md:block">
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>

                  <input
                    type="text"
                    class="w-full rounded-md border bg-white py-2 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div class="flex md:hidden">
              <button
                type="button"
                class="text-white hover:text-gray-600 focus:text-white focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
                aria-label="toggle menu"
                onClick={() => setToggleResponsive(!toggleResponsive)}
              >
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
          {toggleResponsive && (
            <div class="items-center md:flex">
              <div class="mt-2 flex flex-col md:mx-1 md:mt-0 md:flex-row ">
                <div className="mx-2 text-white">
                  <Link href="/collections/0xdE026Bbe407dddD51923652875c7f026AA19557b">
                    Collections
                  </Link>
                </div>
                <div className="mx-2 text-white">
                  <Link href="/collections/0xdE026Bbe407dddD51923652875c7f026AA19557b">
                    Stats
                  </Link>
                </div>
                <div className="mx-2 text-white">
                  <Link href="/collections/0xdE026Bbe407dddD51923652875c7f026AA19557b">
                    Resources
                  </Link>
                </div>
                <div className="mx-2  text-white">
                  <Link href="/collections/0xdE026Bbe407dddD51923652875c7f026AA19557b">
                    Create
                  </Link>
                </div>
              </div>

              <div class="-mx-1 flex items-center justify-start py-2 md:mx-0 md:flex-row">
                <div class="mx-1 w-1/2 transform rounded-md  px-3 py-2 text-center text-sm font-medium leading-5  transition-colors duration-200 md:mx-2 md:w-auto">
                  <div
                    className={` flex text-center ${style.headerIcon} md:flex-row`}
                  >
                    <CgProfile />

                    <p className=" ml-1 text-2xl md:hidden">Profile</p>
                  </div>
                </div>
                <div class="mx-1 w-1/2 transform rounded-md  px-3 py-2 text-center text-sm font-medium leading-5  transition-colors duration-200 md:mx-2 md:w-auto">
                  <div
                    className={` flex text-center ${style.headerIcon} md:flex-row`}
                  >
                    <MdOutlineAccountBalanceWallet />

                    <p className="ml-1 text-2xl md:hidden">Wallet</p>
                  </div>
                </div>
              </div>

              {/* <!-- Search input on mobile screen --> */}
              <div class="mt-3 md:hidden">
                <div class="relative">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="h-5 w-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>

                  <input
                    type="text"
                    class="w-full rounded-md border bg-white py-2 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
