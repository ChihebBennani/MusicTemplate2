"use client";

import { news } from "@/app/utils/constants";
import React, { useState } from "react";
import NewsSectionItem from "../NewsSectionItem";
import CustomCursor from "../CustomCursor";

const NewsSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative bg-zinc-900 text-zinc-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 py-20 gap-10">
      <CustomCursor hovered={hovered} />
      {news.map((sNew, index) => (
        <NewsSectionItem
          key={index}
          setHovered={setHovered}
          containerClasses={index === 0 ? "md:col-span-2" : ""}
          {...sNew}
        />
      ))}
    </section>
  );
};

export default NewsSection;
