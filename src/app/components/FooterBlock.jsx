import React from "react";

const FooterBlock = ({ title, children }) => {
  return (
    <div className="space-y-6 px-3 w-full md:h-1/2 lg:w-1/5">
      <strong className="text-zinc-100 text-2xl">{title}</strong>
      <div className="w-full flex flex-col text-zinc-300 text-lg gap-2">
        {children}
      </div>
    </div>
  );
};

export default FooterBlock;
