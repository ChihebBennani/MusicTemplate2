"use client";

import ReactLenis from "@studio-freight/react-lenis";

const LenisScroll = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisScroll;
