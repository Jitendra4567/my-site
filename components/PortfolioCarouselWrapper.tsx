"use client";

import dynamic from "next/dynamic";

// dynamic import with ssr disabled
const PortfolioCarousel = dynamic(() => import("./PortfolioCarousel"), {
  ssr: false,
});

export default function PortfolioCarouselWrapper() {
  return <PortfolioCarousel />;
}
