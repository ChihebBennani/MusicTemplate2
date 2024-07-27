import Link from "next/link";
import React from "react";

export const NavLink = ({ path, children, className, id = null }) => {
  return (
    <div className="relative overflow-hidden">
      <div id={id}>
        <Link className={className} href={path}>
          {children}
        </Link>
      </div>
    </div>
  );
};
