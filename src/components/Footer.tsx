const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#273036] relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute -top-20 md:-top-32 lg:-top-52 xl:-top-60 -z-10"
      >
        <path
          fill="#273036"
          fillOpacity="1"
          d="M0,96L120,106.7C240,117,480,139,720,149.3C960,160,1200,160,1320,160L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div className="container mx-auto px-4 py-16 z-50">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
        <div className="flex items-center justify-center text-center">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-white">
              Innovative Footwear & Leather BD House
            </h3>
            <p className="text-gray-300 mb-8 md:w-[70%] mx-auto text-lg">
              Bangladeshs premier leather distributor, providing exceptional
              quality leather products since 2021.
            </p>
            <div className="flex justify-center space-x-4 *:hover:bg-[#ffcba6] *:rounded-full *:w-10 *:h-10 *:flex *:items-center *:justify-center">
              <a
                href="#"
                className="text-[#f36e0f] hover:text-leather-beige transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-[#f36e0f] hover:text-leather-beige transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="text-[#f36e0f] hover:text-leather-beige transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-16" />
        <div className=" flex flex-col-reverse md:flex-row gap-16 md:gap-0 md:justify-between items-center">
          <p className="text-gray-300 text-sm flex items-center justify-center gap-1">
            <span className="-mb-1">©</span>{" "}
            <span>{currentYear} IFLBH. All rights reserved.</span>
          </p>

          {/* <div className="">
            <ul className="flex items-center justify-center gap-3 *:underline">
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-leather-beige transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-leather-beige transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-leather-beige transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
