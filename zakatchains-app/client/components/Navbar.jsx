import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 z-20 w-full py-2 bg-gray-900 sm:px-4 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex justify-start w-[245px]">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/img/logo-zakat.png"
              className="h-12 mr-3 sm:h-14"
              alt="Zakat Logo"
              width={58}
              height={58}
            />
          </Link>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <li>
              <Link
                href="/payzakat"
                className="py-2 pl-3 pr-4 text-gray-400 md:p-0 hover:text-white">
                Pay Transaction
              </Link>
            </li>
            <li>
              <Link
                href="/all-transactions"
                className="py-2 pl-3 pr-4 text-gray-400 md:p-0 hover:text-white">
                All Transactions
              </Link>
            </li>
            <li>
              <Link
                href="/check-tx"
                className="py-2 pl-3 pr-4 text-gray-400 md:p-0 hover:text-white">
                Check Transaction
              </Link>
            </li>
            <li>
              <Link
                href="/check-invoice"
                className="py-2 pl-3 pr-4 text-gray-400 md:p-0 hover:text-white">
                Check Invoice
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
