import { news } from "@/app/utils/constants";
import React from "react";
import NewsSectionItem from "../NewsSectionItem";

const NewsSection = () => {
  return (
    <section className="bg-zinc-900 text-zinc-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-20 gap-10">
      {news.map((sNew, index) => (
        <NewsSectionItem
          key={index}
          {...sNew}
          containerClasses={index === 0 ? "md:col-span-2" : ""}
        />
      ))}
    </section>
  );
};

export default NewsSection;
