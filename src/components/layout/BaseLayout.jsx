import React from "react";
import Header from "./Header";

const BaseLayout = () => {
  return (
    <>
      <div className="pt-4 bg-gradient-to-b from-gray-100 to-gray-400 h-screen ">
        <Header />
      </div>
    </>
  );
};

export default BaseLayout;
