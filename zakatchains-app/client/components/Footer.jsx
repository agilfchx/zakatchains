import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative pt-8 pb-6 bg-gray-800 text-slate-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Image
              src="/assets/img/logo-zakat.png"
              alt="Zakat Logo"
              width={80}
              height={80}
              className="mb-5"
            />
            <h5 className="mt-0 mb-2 text-lg">
              Tugas Akhir S1 Teknologi Informasi
              <br />
              Muhamad Agil Fachrian - 1303190040
            </h5>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex flex-wrap mb-6 items-top">
              <div className="w-full px-4 ml-auto lg:w-4/12">
                <span className="block mb-2 font-bold text-blue-100 uppercase text-md">
                  Quick Links
                </span>
                <ul>
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold hover:text-slate-500"
                      href="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold hover:text-slate-500"
                      href="/payzakat">
                      Pay Zakat
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold hover:text-slate-500"
                      href="/all-transactions">
                      All Transactions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold hover:text-slate-500"
                      href="/check-tx">
                      Check History
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold hover:text-slate-500"
                      href="/check-invoice">
                      Check Invoice
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full px-4 lg:w-4/12">
                <span className="block mb-2 font-bold text-blue-100 uppercase text-md">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold hover:text-slate-500"
                      href="https://github.com/agilfchx/zakatchains">
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full px-4 mx-auto text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold">
              Copyright &copy; 2022 by Muhamad Agil Fachrian
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
