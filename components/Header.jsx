import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import openSeaLogo from '../public/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
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
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={openSeaLogo} height={40} width={40} />
          <div className={style.logoText}>Opensea</div>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          placeholder="Search items, collections, and accounts"
        />
      </div>
      <div class="flex md:hidden">
        <button
          type="button"
          class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
          aria-label="toggle menu"
        >
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
      {toggleResponsive && (
        <div className="items-center md:flex">
          <div className="mt-2 flex flex-col md:mx-1 md:mt-0 md:flex-row">
            <Link href="/collections/0xdE026Bbe407dddD51923652875c7f026AA19557b">
              <div className={style.headerItem}> Collections </div>
            </Link>
            <div className={style.headerItem}> Stats </div>
            <div className={style.headerItem}> Resources </div>
            <div className={style.headerItem}> Create </div>
            <div className={style.headerIcon}>
              <CgProfile />
            </div>
            <div className={style.headerIcon}>
              <MdOutlineAccountBalanceWallet />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
