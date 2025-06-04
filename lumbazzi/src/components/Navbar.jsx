import React, { useState, useEffect } from "react";
import { PiHandbagSimple } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const textColor = isSearchOpen ? "text-black" : "text-white";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Proper Shop",
      to: "/propershop",
    },
    {
      name: "Our Story",
      to: "/ourstory",
      hasDropdown: true,
    },
    {
      name: "Why Lumbazzi",
      to: "/whylumbazzi",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isSearchOpen
            ? "bg-white"
            : isScrolled
            ? "bg-[linear-gradient(to_right,#070c18_0,#171e2a_calc(100vw*2/3),#273246_100vw,#27324600_200vw)]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto lg:py-[1rem]">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <div className="relative">
                  <svg
                    className={`hidden lg:block ${textColor}`}
                    width="300"
                    height="60"
                    viewBox="0 0 307 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M26.887 17.249c.672-.04 1.153-.071 1.639-.102 1.661-.103 3.318-.134 4.948.29 2.873.743 4.57 2.765 4.694 5.718.045 1.01-.08 2.03-.124 3.09 2.934-.556 5.919-1.331 8.93-.329l.04.285c-.272.058-.562.214-.811.165-2.165-.45-4.24.084-6.316.548-.721.16-1.585.178-2.097.605-.477.401-.58 1.256-.842 1.911-1.537 3.812-3.861 7.13-6.57 10.181-4.355 4.904-9.317 9.055-15.302 11.847-2.882 1.345-5.888 2.334-9.126 2.142a11.174 11.174 0 0 1-3.278-.703C.36 52.006-.512 49.935.294 47.587c.454-1.322 1.238-2.444 2.16-3.473 2.436-2.717 5.398-4.774 8.47-6.676 6.258-3.87 13.028-6.623 19.945-9.037 1.042-.365 2.106-.672 3.153-1.033.205-.071.476-.24.52-.419.424-1.576.624-3.18.237-4.796-.58-2.45-2.294-3.693-4.81-3.514-1.532.107-3.064.253-4.6.29-.616.012-1.27-.139-1.854-.353-.841-.311-1.037-.94-.498-1.657.748-.997 1.58-1.937 2.396-2.881 1.38-1.599 2.734-3.22 3.683-5.13.588-1.185 1.055-2.406 1.073-3.75.023-1.854-.948-3.074-2.77-3.44-1.813-.36-3.594-.035-5.362.34-2.744.583-5.336 1.59-7.861 2.792-.806.383-1.639.712-2.539.57-.405-.067-.775-.343-1.158-.526.299-.294.548-.703.905-.86 2.04-.903 4.061-1.86 6.168-2.578C20.474.458 23.498-.094 26.61.013c1.59.054 3.144.299 4.591.998 2.272 1.1 3.203 2.98 2.722 5.46a10.787 10.787 0 0 1-1.849 4.32c-1.331 1.84-2.797 3.58-4.208 5.358-.268.334-.562.641-.98 1.113v-.013Zm7.14 11.397c-.219.058-.335.08-.442.116-7.776 2.726-15.29 6.012-22.277 10.417-2.517 1.59-4.948 3.3-6.953 5.54-.98 1.092-1.799 2.29-2.15 3.746-.415 1.72.369 3.283 2.03 3.826.762.25 1.608.356 2.414.338 1.995-.04 3.875-.645 5.683-1.443 5.126-2.258 9.455-5.63 13.299-9.65 3.412-3.573 6.262-7.528 8.12-12.142.088-.218.16-.44.27-.757l.005.01Z"
                    />
                    <path
                      fill="currentColor"
                      d="M12.562 29.212c1.519-.57 2.922-1.145 4.351-1.621 1.884-.633 3.786-1.243 5.795-1.296.56-.014 1.135.098 1.688.21.151.03.378.289.36.413-.022.178-.209.397-.383.477-.231.107-.512.102-.774.138-.58.071-1.185.049-1.733.223-4.062 1.269-7.896 2.988-11.085 5.896-1.14 1.042-2.468 1.105-3.857.726-.846-.231-1.002-.636-.61-1.42 3.104-6.222 5.754-12.636 8.06-19.196.103-.29.215-.579.335-.86.525-1.224 1.674-1.679 2.926-1.189.574.223.708.682.641 1.19-.124.97-.231 1.96-.49 2.899-1.202 4.422-2.895 8.658-4.917 12.764-.089.183-.178.365-.311.642l.004.004ZM89.016 32.926h1.935v-11.54h-1.935V19h6.872v2.387H93.93v11.375h4.78v-2.505h2.55v4.892H89.016V32.92v.006ZM117.771 21.26h-1.935v-2.252h6.873v2.251h-1.958v7.826c0 .909.203 1.727.547 2.297.57.908 1.681 1.433 3.047 1.433 1.365 0 2.432-.502 3.024-1.456.367-.615.548-1.365.548-2.296v-7.804h-1.936v-2.251h6.85v2.251h-1.935v7.826c0 1.569-.435 3.025-1.185 4.052-1.185 1.546-3.205 2.296-5.372 2.296-2.296 0-4.254-.84-5.371-2.274-.841-1.05-1.208-2.454-1.208-4.074V21.26h.011ZM148.049 32.926h1.912l.954-11.675h-1.958V19h5.259l3.594 9.124c.271.796.384 1.343.384 1.343h.045s.113-.547.406-1.343L162.217 19h5.259v2.251h-1.935l.931 11.675h1.912v2.229h-6.618v-2.23h1.794l-.592-8.147c-.046-.57.067-1.5.067-1.5h-.067s-.181.885-.39 1.432l-3.092 7.443h-2.55l-3.098-7.443c-.203-.547-.361-1.433-.361-1.433h-.091s.113.931.068 1.501l-.592 8.148h1.822v2.229h-6.641v-2.23h.006ZM184.035 32.926h1.936V21.25h-1.936V19h7.42c1.208 0 2.048.09 2.889.434 1.456.57 2.455 1.936 2.455 3.73 0 1.501-.728 2.799-1.981 3.46v.044c1.8.548 2.618 2.116 2.618 3.82 0 2.252-1.456 3.871-3.205 4.39-.795.226-1.546.271-2.409.271h-7.781V32.92l-.006.006Zm7.759-7.324c1.275 0 1.98-.886 1.98-2.116 0-.796-.293-1.501-.931-1.845-.389-.18-.818-.249-1.388-.249h-2.505v4.21h2.844Zm.158 7.166c.389 0 .818-.045 1.162-.18.818-.34 1.298-1.253 1.298-2.275 0-1.388-.863-2.341-2.342-2.341h-3.115v4.801h3.002l-.005-.005ZM212.492 32.926h1.479L218.817 19h3.392l4.847 13.926h1.478v2.229h-6.077v-2.23h1.591l-.999-3.024h-5.095l-.999 3.025h1.592v2.229h-6.055v-2.23Zm9.875-5.344-1.524-4.576c-.248-.795-.293-1.41-.293-1.41h-.068s-.068.615-.293 1.41l-1.546 4.576h3.729-.005ZM243.635 33.27l7.758-11.127c.322-.457.683-.773.683-.773v-.045s-.48.067-.931.067h-4.87v2.432h-2.528V19h11.923v1.868l-7.758 11.15a4.54 4.54 0 0 1-.683.772v.046s.479-.068.931-.068h5.208v-2.506h2.55v4.893h-12.289v-1.89l.006.005ZM271.904 33.27l7.759-11.127c.321-.457.682-.773.682-.773v-.045s-.479.067-.931.067h-4.869v2.432h-2.528V19h11.923v1.868l-7.759 11.15a4.54 4.54 0 0 1-.683.772v.046s.48-.068.931-.068h5.208v-2.506h2.551v4.893h-12.29v-1.89l.006.005ZM300.141 32.926h1.935V21.25h-1.935V19h6.872v2.251h-1.958v11.675h1.958v2.229h-6.872v-2.23Z"
                    />
                  </svg>
                  {/* Mobile Logo - Hidden on desktop */}
                  <svg
                    className="block lg:hidden"
                    data-src="//lumbazzi.com/cdn/shop/t/26/assets/logo--mobile.svg?v=63902486781454655641745939458"
                    class="site-header__logo--mobile"
                    aria-label="Lumbazzi"
                    width="28"
                    height="32"
                    data-loading=""
                    viewBox="0 0 29 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-id="svg-loader_2"
                  >
                    <path
                      d="M16.6109 10.2731C17.0114 10.2492 17.2979 10.2307 17.587 10.2121C18.5764 10.1511 19.5631 10.1325 20.5339 10.3845C22.2448 10.8275 23.2555 12.0317 23.3297 13.7904C23.3562 14.3925 23.282 14.9999 23.2555 15.6312C25.0035 15.2997 26.7807 14.8381 28.5738 15.435C28.5817 15.4907 28.5897 15.549 28.5977 15.6047C28.4359 15.6392 28.2634 15.732 28.1149 15.7029C26.8258 15.435 25.5897 15.7533 24.3536 16.0291C23.9239 16.1246 23.4093 16.1352 23.1043 16.3899C22.8204 16.6286 22.7594 17.1379 22.6029 17.5278C21.6878 19.7984 20.3032 21.7745 18.6904 23.5915C16.0963 26.5119 13.1413 28.9841 9.57633 30.6472C7.86014 31.4483 6.06968 32.0372 4.14129 31.9231C3.48346 31.8833 2.80441 31.7401 2.18902 31.504C0.812355 30.9735 0.292459 29.7401 0.772568 28.3422C1.04313 27.5544 1.50997 26.8859 2.05905 26.2732C3.50998 24.6552 5.27392 23.4297 7.10417 22.2971C10.831 19.992 14.8628 18.3527 18.9822 16.9151C19.6029 16.6976 20.2369 16.5145 20.8602 16.2997C20.9822 16.2572 21.144 16.1564 21.1706 16.0503C21.4226 15.1113 21.5419 14.1564 21.3111 13.1936C20.9663 11.7347 19.9451 10.9946 18.4464 11.1007C17.5339 11.1644 16.6215 11.2519 15.7063 11.2731C15.3403 11.2811 14.9504 11.1909 14.6029 11.0636C14.1016 10.8779 13.9848 10.5039 14.3058 10.0768C14.7514 9.48267 15.2474 8.92298 15.7329 8.36064C16.5551 7.40838 17.3615 6.44286 17.9265 5.30492C18.2766 4.59935 18.5552 3.87255 18.5658 3.07149C18.579 1.96803 18.0008 1.24124 16.9159 1.02373C15.8363 0.808877 14.7753 1.00251 13.7222 1.22532C12.0883 1.57281 10.5445 2.17228 9.04052 2.88846C8.56041 3.11658 8.06438 3.31287 7.52857 3.22799C7.28719 3.1882 7.06703 3.02374 6.83891 2.91499C7.01663 2.73992 7.16518 2.49589 7.37738 2.40305C8.59224 1.86459 9.79649 1.29429 11.0511 0.867233C12.7912 0.273065 14.5923 -0.055849 16.4464 0.00781177C17.3933 0.0396422 18.3191 0.185532 19.1812 0.601979C20.534 1.25716 21.0883 2.37652 20.8019 3.85399C20.6215 4.79298 20.2528 5.66567 19.7011 6.42694C18.9079 7.52244 18.0353 8.55958 17.1944 9.61794C17.0353 9.81688 16.8602 9.99991 16.6109 10.2811V10.2731ZM20.8629 17.061C20.7329 17.0954 20.6639 17.1087 20.6003 17.1299C15.9689 18.7533 11.4941 20.7108 7.33228 23.3342C5.8336 24.2812 4.38532 25.2997 3.19168 26.634C2.60812 27.2838 2.12006 27.9974 1.91051 28.8647C1.66382 29.8886 2.13067 30.8197 3.12006 31.1433C3.57365 31.2918 4.07763 31.3555 4.55774 31.3449C5.74607 31.321 6.86544 30.9602 7.94237 30.4854C10.9954 29.1406 13.5737 27.1326 15.8628 24.7374C17.8947 22.6101 19.5923 20.2546 20.6984 17.5066C20.7515 17.3766 20.7939 17.244 20.8602 17.0557L20.8629 17.061Z"
                      fill=""
                    ></path>
                    <path
                      d="M8.08042 17.3981C8.98494 17.0585 9.82049 16.7164 10.672 16.4325C11.794 16.0559 12.9266 15.6925 14.1229 15.6607C14.4571 15.6527 14.7993 15.719 15.1282 15.7853C15.2184 15.8039 15.3537 15.9577 15.3431 16.032C15.3298 16.1381 15.2184 16.2681 15.1149 16.3158C14.977 16.3795 14.8099 16.3768 14.6534 16.3981C14.3086 16.4405 13.9478 16.4272 13.6216 16.5307C11.2025 17.2867 8.91863 18.3105 7.01941 20.0426C6.34036 20.6633 5.54991 20.7005 4.72232 20.475C4.21833 20.3371 4.1255 20.0957 4.35892 19.6288C6.20774 15.9233 7.78599 12.1036 9.16 8.19643C9.22101 8.02401 9.28733 7.8516 9.35894 7.68449C9.67194 6.95504 10.3563 6.68448 11.1017 6.97626C11.4438 7.10889 11.5234 7.3821 11.4836 7.68449C11.4094 8.26274 11.3457 8.8516 11.1918 9.41129C10.4757 12.0453 9.4677 14.5678 8.26345 17.0134C8.2104 17.1222 8.15735 17.231 8.07777 17.3954L8.08042 17.3981Z"
                      fill=""
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-[3.125rem]">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    to={item.to}
                    className={`flex items-center space-x-1 font-host py-2 text-lg font-thin cursor-pointer ${textColor}`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </div>
              ))}
              {/* Right Side Icons */}
              <div className="flex items-center space-x-4">
                {/* Search Icon */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                    isSearchOpen ? "text-black" : "text-white"
                  }`}
                >
                  <CiSearch className="w-7 h-7" />
                </button>

                {/* User Icon */}
                <button
                  className={`p-2  ${textColor} rounded-lg transition-all duration-200 hover:scale-110`}
                >
                  <AiOutlineUser className="w-7 h-7" />
                </button>

                {/* Cart Icon with Badge */}
                <button
                  className={`flex relative p-2  ${textColor} rounded-lg transition-all duration-200 hover:scale-110 group`}
                >
                  <PiHandbagSimple className="w-7 h-7" />
                  <span className=" text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center  group-hover:scale-110 transition-transform duration-200"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      <div
        className={`fixed top-[110px] left-0 right-0  bg-white text-black z-[10] flex flex-col transform transition-transform duration-500 ease-in-out ${
          isSearchOpen ? "translate-y-0" : "-translate-y-[300%]"
        } `}
      >
        <div className="flex justify-between container m-auto">
          <input
            type="text"
            placeholder="SEARCH FOR..."
            className=" p-7 text-lg w-full outline-none"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <MdOutlineClose className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 right-4 z-[1000] flex lg:hidden text-white  p-2 "
      >
        {isMobileMenuOpen ? (
          <MdOutlineClose className="w-6 h-6" />
        ) : (
          <CiMenuFries className="w-7 h-7" />
        )}
      </button>
      {/* Mobile Menu */}

      <div
        className={`fixed top-0 right-0 z-[99] h-full w-full bg-gradient-to-b from-[#273246] via-[#171e2a] to-[#070c18] p-6 pt-16 transform transition-transform duration-300 ease-in-out
  ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-center   space-y-6 mt-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`text-white text-2xl text-center font-light font-host py-5 w-[80%] mb-0 border-t ${
                index === navItems.length - 1 ? "border-b" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <div className="flex mt-19">
            {/* Search Icon */}
            <button className="p-2 text-white rounded-lg transition-all duration-200 hover:scale-110">
              <CiSearch className="w-7  h-7 " />
            </button>

            {/* User Icon */}
            <button className="p-2 text-white rounded-lg transition-all duration-200 hover:scale-110">
              <AiOutlineUser className="w-7 h-7" />
            </button>

            {/* Cart Icon with Badge */}
            <button className="flex relative p-2 text-white rounded-lg transition-all duration-200 hover:scale-110 group">
              <PiHandbagSimple className="w-7 h-7" />
              <span className=" text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center  group-hover:scale-110 transition-transform duration-200"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
