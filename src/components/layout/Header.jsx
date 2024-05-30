import React, { useState } from "react";
import {
  MenuIcon,
  CloseIcon,
  CompanyLogo,
  ShoppingBagIcon,
} from "../common/Icons";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="flex justify-between gap-4 px-4  max-w-[1216px]  mx-auto h-[68px] xl:h-auto xl:py-3 xl:px-0 ">
        <nav className="flex flex-1 items-center xl:gap-[103px]">
          <div className="flex items-center gap-1 ">
            <img src={CompanyLogo} alt="logo" className="w-8 h-8" />
            <p className="text-neutral-900 text-base font-bold leading-6 tracking-tighter">
              StyleNest
            </p>
          </div>
          <div className="flex-1 flex justify-end xl:justify-between xl:items-center">
            <div className="hidden xl:block">
              <ul className="flex gap-8">
                <li className="text-sm font-medium text-neutral-600 leading-6">
                  Shop all
                </li>
                <li className="text-sm font-normal text-neutral-900 leading-6">
                  Latest arrivals
                </li>
              </ul>
            </div>

            <div>
              <img
                src={ShoppingBagIcon}
                alt="shoping bag"
                className="w-6 h-6 cursor-pointer"
              />
            </div>
          </div>
        </nav>
        <button
          aria-label="Open mobile menu"
          className="xl:hidden"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <img src={MenuIcon} alt="menu" className="w-5 h-5" />
        </button>
      </section>
      {isModalOpen && (
        <div className="h-screen bg-white absolute top-0 w-full">
          <nav className="px-4 py-8 flex flex-col gap-6  h-full">
            <div className="flex justify-between items-cente">
              <div className="flex items-center gap-1 ">
                <img src={CompanyLogo} alt="logo" className="w-8 h-8" />
                <p className="text-neutral-900 text-base font-bold leading-6 tracking-tighter">
                  StyleNest
                </p>
              </div>

              <button>
                <img
                  src={CloseIcon}
                  alt="shoping bag"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                />
              </button>
            </div>
            <ul className="flex flex-col gap-2 flex-1 ">
              <li className="px-3 py-2 text-sm font-normal text-neutral-900 leading-6">
                Shop all
              </li>
              <li className="px-3 py-2 text-sm font-normal text-neutral-900 leading-6">
                Latest arrivals
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
