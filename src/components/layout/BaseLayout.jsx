import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const BaseLayout = () => {
  return (
    <>
      <div className="pt-4 flex flex-col h-screen">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
