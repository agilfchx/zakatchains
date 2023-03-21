import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gray-900 pt-14">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Secure place to pay zakat
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
          The system here uses blockchain technology to ensure security during
          transactions, so that it is more
          <span className="italic font-bold"> transparent</span> and there is
          <span className="italic font-bold"> no manipulation</span> of data.
        </p>
        <div className="flex flex-col mb-8 space-y-4 lg:mb-16 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href="/payzakat"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-gray-800 border-gray-700 rounded-lg focus:ring-gray-600 hover:bg-gray-700 focus:ring-primary-300 ">
            Pay Zakat Now
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </Link>
          <Link
            href="/all-transactions"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border bo rounded-lg text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="w-5 h-5 mr-2 -ml-1"
              viewBox="0 0 16 16">
              <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
              <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
            </svg>
            All Transactions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
