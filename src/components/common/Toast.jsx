import React from "react";

const Error = () => {
  return (
    <>
      <section className="absolute top-6 border bg-red-50 rounded-full flex gap-4 p-1 items-center justify-center w-full md:w-fit md:justify-self-center ">
        <span className="bg-white px-2.5 py-[2px] text-red-800 rounded-full border shadow">
          Error
        </span>
        <p className="text-sm max-w-[244px] text-red-600 font-medium leading-5 md:max-w-none">
          Failed to submit. Please ensure your details are correct or try again
          later.
        </p>
      </section>
    </>
  );
};

export default Error;
