import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="px-4 xl:px-8">
        <div className="xl:px-8">
          <div className="flex flex-col gap-8 md:gap-5 xl:flex-row xl:justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold leading-7 text-neutral-900">
                Join our newsletter
              </h3>
              <p className="text-base text-neutral-600">
                We’ll send you a nice letter once per week. No spam.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="bg-neutral-50 border border-neutral-200 text-neutral-500 px-3.5 py-2.5 rounded-[4px] flex-1"
              />
              <button className="bg-indigo-700 text-white rounded-[4px] shadow px-3.5 py-2.5">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
