import React from "react";
import {
  FacbookIcon,
  YoutubeIcon,
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  CompanyLogo,
} from "../common/Icons";
import Newsletter from "../common/Newsletter";

const Footer = () => {
  return (
    <>
      {/* content */}
      <div className="bg-white  rounded-[4px] rounded-t-none  m-4 mt-0 md:py-28 lg:py-16 border border-red-500">
        {/* footer */}
        <div className=" flex flex-col gap-12  py-12 md:py-16 md:gap-16 lg:py-24 ">
          {/* section ONE */}
          <Newsletter />
          {/* section TWO */}
          <div className="flex flex-col gap-12 px-4 md:gap-16 lg:px-8">
            {/* container one */}
            <div className="lg:mx-8">
              {/* content one */}
              <div className="flex flex-col gap-8 md:gap-12 lg:flex-row lg:gap-16">
                <div className="flex flex-col gap-6 md:min-w-80 md:max-w-80 md:gap-8">
                  <div className="flex items-center gap-1 ">
                    <img src={CompanyLogo} alt="logo" className="w-8 h-8" />
                    <p className="text-neutral-900 text-base font-bold leading-6 tracking-tighter">
                      StyleNest
                    </p>
                  </div>
                  <p className="text-base text-neutral-600 leading-6">
                    Craft stunning style journeys that weave more joy into every
                    thread.
                  </p>
                </div>
                <div className="flex flex-col gap-8 md:flex-row md:min-w-[640px] lg:min-w-[800px] lg:justify-end ">
                  <div className="flex flex-col gap-4 flex-1 lg:flex-grow-0 lg:flex-[280px] ">
                    <h3 className="text-sm text-neutral-500 leading-5">
                      SHOP CATEGORIES
                    </h3>
                    <ul className="flex flex-col gap-3">
                      <li className="text-neutral-600 text-base font-medium leading-6">
                        Unisex
                      </li>
                      <li className="text-neutral-600 text-base font-medium leading-6">
                        Women
                      </li>
                      <li className="text-neutral-600 text-base font-medium leading-6">
                        Men
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4 flex-1 lg:flex-grow-0 lg:flex-[280px] ">
                    <h3 className="text-sm text-neutral-500 leading-5">
                      SHOP COLLECTIONS
                    </h3>
                    <ul className="flex flex-col gap-3">
                      <li className="text-neutral-600 text-base font-medium leading-6">
                        Latest arrivals
                      </li>
                      <li className="text-neutral-600 text-base font-medium leading-6">
                        Urban Oasis
                      </li>
                      <li className="text-neutral-600 text-base font-medium leading-6">
                        Cozy Comfort
                      </li>
                      <li className="text-neutral-600 text-base font-medium leading-6">
                        Fresh Fusion
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* container two */}
            <div className="border-t border-neutral-200 lg:mx-8">
              {/* content two */}
              <div className="flex flex-col gap-8 pt-8 md:flex-row">
                <p className="text-neutral-500 leading-6">
                  © 2024 StyleNest, Inc. All rights reserved.
                </p>
                <div className="flex gap-6 lg:ml-auto">
                  <img src={YoutubeIcon} alt="Youtube Icon Logo" />
                  <img src={InstagramIcon} alt="Instagram Icon Logo" />
                  <img src={FacbookIcon} alt="Facbook Icon Logo" />
                  <img src={GithubIcon} alt="Github Icon Logo" />
                  <img src={TwitterIcon} alt="Twitter Icon Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
