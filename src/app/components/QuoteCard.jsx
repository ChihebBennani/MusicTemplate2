import React from "react";

const QuoteCard = ({ title, subTitle, description, starts }) => {
  return (
    <blockquote className="px-6 py-10">
      <div className="flex items-start relative">
        <span className="text-[130px] lg:text-[150px] -translate-y-1/3">
          &quot;
        </span>
        <p className="relative before:text-zinc-200 text-zinc-200 flex gap-2 font-semibold text-lg lg:text-xl">
          {description}
        </p>
      </div>
      <div className="w-full h-full flex flex-col gap-4 items-center pt-6">
        <h4 className="text-2xl font-bold">{title}</h4>
        <h5 className="text-center px-6">{subTitle}</h5>
      </div>
    </blockquote>
  );
};

export default QuoteCard;
