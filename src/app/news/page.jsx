import React from "react";
import PageTitle from "../components/PageTitle";
import NewsSection from "../components/sections/NewsSection";
import NewsLetterSection from "../components/sections/NewsLetterSection";

const page = () => {
  return (
    <>
      <PageTitle title="News Room" />
      <NewsSection />
      <NewsLetterSection />
    </>
  );
};

export default page;
