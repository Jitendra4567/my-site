'use client';
import Slider from 'react-slick';
import Image from "next/image";
import Link from "next/link";

import CanvasDots from '@/components/CanvasDots';

export default function Home() {
  const settings = {
    speed: 800,
    fade: true,
    cssEase: 'linear'
  };
  return (
    <main className="relative pt-[4.236rem]">

      <section className="relative md:min-h-[calc(100vh_-_70px)] min-h-auto flex items-center justify-center bg-black overflow-hidden">
        <div className="div-video-wrapper">
          <video loop autoPlay muted
            className="absolute top-1/2 left-1/2 w-[177.77777778vh] min-w-full min-h-[56.25vw] h-[56.25vw] -translate-x-1/2 -translate-y-1/2">
            <source src="/bnner-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="inherited-styles-for-exported-element div-style-1"></div>
        </div>

        <div className="container-custom hero-spacing relative z-10 w-full">
          <div className="grid lg:grid-cols-1 grid-spacing items-center text-center">
            <div className="mr_hero_content space-y-6 sm:space-y-8">
              <div className="available-for-project inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:border-[#A3D1FF] hover:scale-105 transition-all duration-300">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A3D1FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A3D1FF]"></span>
                </span>
                <span className="text-[#A3D1FF] text-sm font-medium">Available for Projects</span>
              </div>

              <div>
                <h1 className="text-white font-inter font-bold tracking-tight">
                  <span className="block text-[clamp(2rem,5vw,4rem)] leading-[1.1]">
                    Helping Entrepreneurs
                  </span>
                  <span className="block text-[clamp(2rem,5vw,4rem)] leading-[1.1] mt-2 text-[#A3D1FF]">Dreams
                    Come To Life
                  </span>
                </h1>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center btn-banner">
                  <div className="inline-block ">
                    <Link href="/contact-us" className="mr_btn mr_btn_primary group relative overflow-hidden cursor-pointer">
                      <span className="relative z-10">Book a Free Strategy Call</span>
                      <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                      <Image
                        className="lucide lucide-arrow-up-right ml-2 relative z-10 group-hover:rotate-45 transition-transform duration-300"
                        src="/arrow1.svg"
                        alt="icon"
                        width={24}
                        height={24}
                        priority
                      />
                    </Link>
                  </div>
                  <div className="inline-block ">
                    <Link href="/work" className="mr_btn mr_btn_outline group cursor-pointer">
                      <span className="relative z-10">See Past Work</span>
                      <Image
                        className="lucide lucide-arrow-right ml-2 group-hover:brightness-[0%]  group-hover:translate-x-1 transition-transform duration-300"
                        src="/arrow2.svg"
                        alt="icon"
                        width={24}
                        height={24}
                        priority
                      />
                    </Link>
                  </div>
                </div>

                {/* <div className="flex items-center gap-4 text-sm text-gray-400 justify-center md:mb-26 mb-10">
                    <span>Featured on:</span>
                    <div className="flex items-center gap-3">
                        <a href="#" target="_blank"
                            className="text-[#FFB800] hover:text-white transition-colors">Awwwards</a>
                        <span className="text-gray-600">•</span>
                        <a href="#" target="_blank"
                            className="text-[#FF3D2E] hover:text-white transition-colors">Design Rush</a>
                        <span className="text-gray-600">•</span>
                        <a href="#" target="_blank"
                            className="text-[#0077B5] hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div> */}

                <div className="bg-[#1b1b1b]/80 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 inline-flex items-center gap-2 sm:gap-4 md:gap-6 hover:border-[#A3D1FF] transition-all duration-300 group w-auto">
                  <div className="flex -space-x-1 sm:-space-x-2 md:-space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#1b1b1b] overflow-hidden">
                      <Image
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        src="/client-1.png"
                        alt="logo"
                        width={48}
                        height={48}
                        priority
                      />
                      {/* <img src="images/client-1.png"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                width="48" height="48"> */}
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#1b1b1b] overflow-hidden">
                      <Image
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        src="/client-2.png"
                        alt="logo"
                        width={48}
                        height={48}
                        priority
                      />
                      {/* <img src="images/client-2.png"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                width="48" height="48"> */}
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#1b1b1b] overflow-hidden">
                      <Image
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        src="/client-3.png"
                        alt="logo"
                        width={48}
                        height={48}
                        priority
                      />
                      {/* <img src="images/client-3.png"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                width="48" height="48"> */}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 sm:gap-1 mb-0.5 sm:mb-1">
                      <Image
                        className="lucide lucide-star w-3 h-3 md:w-4 md:h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                        src="/star.svg"
                        alt="logo"
                        width={0}
                        height={0}
                        sizes="auto"
                        priority
                      />
                      <Image
                        className="lucide lucide-star w-3 h-3 md:w-4 md:h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                        src="/star.svg"
                        alt="logo"
                        width={0}
                        height={0}
                        sizes="auto"
                        priority
                      />
                      <Image
                        className="lucide lucide-star w-3 h-3 md:w-4 md:h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                        src="/star.svg"
                        alt="logo"
                        width={0}
                        height={0}
                        sizes="auto"
                        priority
                      />
                      <Image
                        className="lucide lucide-star w-3 h-3 md:w-4 md:h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                        src="/star.svg"
                        alt="logo"
                        width={0}
                        height={0}
                        sizes="auto"
                        priority
                      />
                      <Image
                        className="lucide lucide-star w-3 h-3 md:w-4 md:h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                        src="/star.svg"
                        alt="logo"
                        width={0}
                        height={0}
                        sizes="auto"
                        priority
                      />
                    </div>
                    <p
                      className="text-white font-medium whitespace-nowrap group-hover:text-[#A3D1FF] transition-colors text-xs sm:text-sm md:text-base">
                      Trusted by 40+ clients
                    </p>
                  </div>
                </div>



              </div>

            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-xs sm:text-sm mb-2">Scroll to explore</span>
            <div
              className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
              <div className="w-1 h-1.5 sm:w-1 sm:h-2 bg-[#A3D1FF] rounded-full mouse-scroll"></div>
            </div>
          </div>
        </div>

      </section>

      <div className="w-full overflow-hidden py-16 bg-[#1b1b1b]/50 backdrop-blur-sm">
        <div className="mb-12 text-center anim-title">
          <h3 className="text-2xl font-bold text-white mb-2">Technologies We Work With</h3>
          <p className="text-gray-400">Modern tools for modern solutions</p>
        </div>
        <div className="relative">
          <div className="flex items-center sm:space-x-16 space-x-10  whitespace-nowrap slider-track">
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/react-original.svg"
                  alt="React"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div>
              <span className="text-sm text-gray-300">React</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/typescript-original.svg"
                  alt="TypeScript"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div>
              <span className="text-sm text-gray-300">TypeScript</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/nodejs-original.svg"
                  alt="Node.js"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div>
              <span className="text-sm text-gray-300">Node.js</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/nextjs-original.svg"
                  alt="Next.js"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div>
              <span className="text-sm text-gray-300">Next.js</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/tailwind-css.svg"
                  alt="Tailwind CSS"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div>
              <span className="text-sm text-gray-300">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/postgresql-original.svg"
                  alt="PostgreSQL"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/graphql-plain.svg"
                  alt="GraphQL"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">GraphQL</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/figma-original.svg"
                  alt="GraphQL"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">Figma</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/aws-original.svg"
                  alt="AWS"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">AWS</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/docker-original.svg"
                  alt="Docker"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">Docker</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/redis-original.svg"
                  alt="Redis"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">Redis</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/mongodb-original.svg"
                  alt="MongoDB"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">MongoDB</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/shopify-logo.svg"
                  alt="Shopify"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">Shopify</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/angular-icon.svg"
                  alt="Angular"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">Angular</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/laravel-icon.svg"
                  alt="Laravel"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">Laravel</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/react-original.svg"
                  alt="React"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div>
              <span className="text-sm text-gray-300">React</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/typescript-original.svg"
                  alt="TypeScript"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div>
              <span className="text-sm text-gray-300">TypeScript</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/nodejs-original.svg"
                  alt="Node.js"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div>
              <span className="text-sm text-gray-300">Node.js</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/nextjs-original.svg"
                  alt="Next.js"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div>
              <span className="text-sm text-gray-300">Next.js</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/tailwind-css.svg"
                  alt="Tailwind CSS"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div>
              <span className="text-sm text-gray-300">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/postgresql-original.svg"
                  alt="PostgreSQL"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/graphql-plain.svg"
                  alt="GraphQL"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">GraphQL</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/figma-original.svg"
                  alt="GraphQL"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">Figma</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/aws-original.svg"
                  alt="AWS"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">AWS</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/docker-original.svg"
                  alt="Docker"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">Docker</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/redis-original.svg"
                  alt="Redis"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">Redis</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/mongodb-original.svg"
                  alt="MongoDB"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">MongoDB</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/shopify-logo.svg"
                  alt="Shopify"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">Shopify</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/angular-icon.svg"
                  alt="Angular"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">Angular</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div
                className="w-16 h-16 flex items-center justify-center bg-[#2d3035] rounded-xl p-3 mb-2 hover:scale-110 transition-transform duration-300">
                <Image
                  className="w-10 h-10 object-contain"
                  src="/laravel-icon.svg"
                  alt="Laravel"
                  width={0}
                  height={0}
                  sizes="auto"
                  priority
                />
              </div><span className="text-sm text-gray-300">Laravel</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 text-center">
            <div>
              <span
                className="inline-block px-4 py-2 rounded-full bg-[#A3D1FF]/10 text-[#A3D1FF] text-sm mb-4 sm:mb-6">
                Featured Projects
              </span>
              <div className="anim-title">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                  Experiential Portfolio
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
                  Explore the <strong className="text-white">proven results</strong> of our <strong
                    className="text-white">recent engagements</strong>, where each solution has
                  generated
                  <strong className="text-white">measurable impact and strategic value</strong> for our
                  clients.
                </p>
              </div>
            </div>
          </div>

          <div className='featured-projects'>
            <Slider {...settings}>
              <div
                className="relative w-full !h-[400px] sm:!h-[450px] md:!h-[500px] overflow-hidden bg-[#1b1b1b] rounded-xl border border-white/10">
                <div className="absolute inset-0 grid md:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src="/natura.png"
                      alt="Natura"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1b1b1b] hidden md:block">
                    </div>
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] to-transparent md:hidden">
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 relative">
                    <div className="md:max-w-md portfolio-content">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">
                        Natura
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 md:mb-8">
                        It seems the business world is synonymous with hard, boring work, suits and
                        ties, shopping and acquisitions, producing, consuming, more, more, more..
                      </p>
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        <a href="https://naturaselection.com/" target="_blank"
                          rel="noopener noreferrer"
                          className="group px-3 sm:px-4 py-2 border border-[#A3D1FF] text-[#A3D1FF] rounded-lg hover:bg-[#A3D1FF] hover:text-black transition-colors text-sm font-medium flex items-center gap-1 sm:gap-2">
                          Visit
                          Website
                          <Image
                            className="lucide lucide-external-link w-3 h-3 sm:w-4 sm:h-4 group-hover:brightness-[0%]"
                            src="/visit-website.svg"
                            alt="Natura"
                            width={0}
                            height={0}
                            sizes='auto'
                            priority
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative w-full !h-[400px] sm:!h-[450px] md:!h-[500px] overflow-hidden bg-[#1b1b1b] rounded-xl border border-white/10">
                <div className="absolute inset-0 grid md:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src="/bomboneriapons.png"
                      alt="Binns Media Group"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1b1b1b] hidden md:block">
                    </div>
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] to-transparent md:hidden">
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 relative">
                    <div className="md:max-w-md portfolio-content">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">
                        Bomboneriapons</h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 md:mb-8">
                        You'll find a showcase of all our products, sorted by category, holiday, and
                        ratings, making it easier for you</p>
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        <a href="https://bomboneriapons.com" target="_blank"
                          rel="noopener noreferrer"
                          className="group px-3 sm:px-4 py-2 border border-[#A3D1FF] text-[#A3D1FF] rounded-lg hover:bg-[#A3D1FF] hover:text-black transition-colors text-sm font-medium flex items-center gap-1 sm:gap-2">Visit
                          Website
                          <Image
                            className="lucide lucide-external-link w-3 h-3 sm:w-4 sm:h-4 group-hover:brightness-[0%]"
                            src="/visit-website.svg"
                            alt="Natura"
                            width={0}
                            height={0}
                            sizes='auto'
                            priority
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="relative w-full !h-[400px] sm:!h-[450px] md:!h-[500px] overflow-hidden bg-[#1b1b1b] rounded-xl border border-white/10">
                <div className="absolute inset-0 grid md:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <Image
                      className="w-full h-full object-cover"
                      src="/shantam-builders.png"
                      alt="Shantam builders Group"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1b1b1b] hidden md:block">
                    </div>
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] to-transparent md:hidden">
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 relative">
                    <div className="md:max-w-md portfolio-content">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">
                        Shantam Builders</h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 md:mb-8">
                        A dynamic platform showcasing construction projects, builder portfolios, and
                        completed developments.</p>
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        <a href="https://www.shantambuilders.com" target="_blank"
                          rel="noopener noreferrer"
                          className="group px-3 sm:px-4 py-2 border border-[#A3D1FF] text-[#A3D1FF] rounded-lg hover:bg-[#A3D1FF] hover:text-black transition-colors text-sm font-medium flex items-center gap-1 sm:gap-2">Visit
                          Website
                          <Image
                            className="lucide lucide-external-link w-3 h-3 sm:w-4 sm:h-4 group-hover:brightness-[0%]"
                            src="/visit-website.svg"
                            alt="Natura"
                            width={0}
                            height={0}
                            sizes='auto'
                            priority
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-block " >
              <Link href="/work" className="cursor-pointer inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-[#A3D1FF] text-black rounded-lg hover:bg-[#92bce6] transition-colors">
                View All Projects
                <Image
                  className="lucide lucide-arrow-right ml-2 w-4 h-4 sm:w-5 sm:h-5"
                  src="/arrow3.svg"
                  alt="logo"
                  width={0}
                  height={0}
                  sizes='auto'
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 md:mb-16 text-center mx-auto anim-title">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white overflow-hidden">
              <span className="inline-block overflow-hidden">
                <span className="inline-block">Voices of Impact</span>
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Client experiences that highlight our commitment to delivering consistent, high-impact
              results.
            </p>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center mb-8 sm:mb-12 md:mb-16 opacity-0 translate-y-10 transition-all duration-1000 ease-out opacity-100 translate-y-0">
            <div
              className="bg-[#1b1b1b] p-4 sm:p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all">
              <div
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#A3D1FF] mb-1 sm:mb-2 counter">
                70+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">Projects Delivered</div>
            </div>
            <div
              className="bg-[#1b1b1b] p-4 sm:p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all">
              <div
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#A3D1FF] mb-1 sm:mb-2 counter">
                40+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">Happy Clients</div>
            </div>
            <div
              className="bg-[#1b1b1b] p-4 sm:p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all">
              <div
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#A3D1FF] mb-1 sm:mb-2 counter">
                6+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">Years Experience</div>
            </div>
            <div
              className="bg-[#1b1b1b] p-4 sm:p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all">
              <div
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#A3D1FF] mb-1 sm:mb-2 counter">
                95%</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-400">Client Satisfaction</div>
            </div>
          </div>

          <div className="transition-all duration-1000 ease-out opacity-100 translate-y-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div
                className="testimonial-grid-in bg-[#1f2428] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group h-full hover:rotate-0 rotate-[-0.378669deg]">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1b1b1b] mr-4 flex-shrink-0">
                    <Image
                      className="object-contain"
                      src="/client-1.png"
                      alt="client"
                      width={44}
                      height={44}
                      priority
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-white text-base">David Sterling</h3>
                        <div className="text-xs text-[#A3D1FF]">
                          Chief Executive Officer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                </div>
                <p className="text-gray-300 text-sm">The developer executed the vision with precision,
                  demonstrating exceptional communication skills and professionalism throughout the
                  engagement. They consistently prioritize client satisfaction, ensuring all
                  requirements are met at each phase of the project. I highly recommend their services
                  to anyone seeking a skilled web developer capable of delivering a polished and
                  professional final product.</p>
              </div>
              <div
                className="testimonial-grid-in bg-[#1f2428] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group h-full hover:rotate-0 rotate-[-0.378669deg]">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1b1b1b] mr-4 flex-shrink-0">
                    <Image
                      className="object-contain"
                      src="/client-2.png"
                      alt="client"
                      width={44}
                      height={44}
                      priority
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-white text-base">Ravi Vadgama</h3>
                        <div className="text-xs text-[#A3D1FF]">
                          Marketing Manager
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                </div>
                <p className="text-gray-300 text-sm">The developer’s expertise in web development is truly exceptional. They delivered a
                  website that is both visually impressive and highly functional. Their meticulous
                  attention to detail and commitment to quality ensured a smooth and enjoyable process
                  from start to finish.
                </p>
              </div>
              <div
                className="testimonial-grid-in bg-[#1f2428] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group h-full hover:rotate-0 rotate-[-0.378669deg]">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1b1b1b] mr-4 flex-shrink-0">
                    <Image
                      className="object-contain"
                      src="/client-4.png"
                      alt="client"
                      width={44}
                      height={44}
                      priority
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-white text-base">Victoria Lane</h3>
                        <div className="text-xs text-[#A3D1FF]">
                          Chief Executive Officer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                </div>
                <p className="text-gray-300 text-sm">
                  It has been an absolute pleasure collaborating with
                  this developers. Their deep expertise, strong work ethic, and commitment to
                  delivering results have made a significant impact on our team. They consistently
                  went above and beyond to meet our development needs, and I highly recommend them to
                  anyone seeking a reliable and skilled professional.
                </p>
              </div>
              <div
                className="testimonial-grid-in bg-[#1f2428] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group h-full hover:rotate-0 rotate-[-0.378669deg]">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1b1b1b] mr-4 flex-shrink-0">
                    <Image
                      className="object-contain"
                      src="/client-3.png"
                      alt="client"
                      width={44}
                      height={44}
                      priority
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-white text-base">Claire Emerson</h3>
                        <div className="text-xs text-[#A3D1FF]">
                          Digital Marketing Manager
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                </div>
                <p className="text-gray-300 text-sm">
                  The developers was exceptional in creating the landing page for my business. Their
                  dedication to client satisfaction is unmatched. They were punctual and took great
                  care to thoroughly understand my business and brand. I have only positive feedback
                  and highly recommend their services.
                </p>
              </div>
              <div
                className="testimonial-grid-in bg-[#1f2428] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group h-full hover:rotate-0 rotate-[-0.378669deg]">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1b1b1b] mr-4 flex-shrink-0">
                    <Image
                      className="object-contain"
                      src="/client-5.png"
                      alt="client"
                      width={44}
                      height={44}
                      priority
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-white text-base">Daniel Morgan</h3>
                        <div className="text-xs text-[#A3D1FF]">
                          CEO of Shantam Group
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                </div>
                <p className="text-gray-300 text-sm">My team and I thoroughly enjoyed working with this
                  developer. They took the time to understand our goals for the website and adapted as
                  needed. Their professionalism, patience, and openness to feedback at every stage
                  ensured a seamless and collaborative process. We look forward to engaging them for
                  future projects, confident in their ability to execute with the care and precision
                  required. I highly recommend their services.
                </p>
              </div>
              <div
                className="testimonial-grid-in bg-[#1f2428] p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group h-full hover:rotate-0 rotate-[-0.378669deg]">
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#1b1b1b] mr-4 flex-shrink-0">
                    <Image
                      className="object-contain"
                      src="/client-6.png"
                      alt="client"
                      width={44}
                      height={44}
                      priority
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-white text-base">Rachel Donovan</h3>
                        <div className="text-xs text-[#A3D1FF]">
                          Digital Marketing Agency Owner
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <Image
                    className="lucide lucide-star w-4 h-4 fill-[#A3D1FF] text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                </div>
                <p className="text-gray-300 text-sm">Outstanding work—thank you for bringing my vision to
                  life with a beautifully crafted website!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 md:mb-16 text-center mx-auto anim-title">
            <span
              className="inline-block px-4 py-2 rounded-full bg-[#A3D1FF]/10 text-[#A3D1FF] text-sm mb-4 sm:mb-6">Our
              Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white">
              <span>Multi-Tier Design Expertise</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Combining smart strategy with technical precision to drive <strong
                className="text-white">measurable outcomes</strong>
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <div
              className="bg-[#1b1b1b] p-4 sm:p-6 md:p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all transform hover:-translate-y-1 duration-300">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Image
                    className="lucide lucide-code w-5 h-5 sm:w-6 sm:h-6 text-[#A3D1FF]"
                    src="/code.svg"
                    alt="code"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                  <span className="text-white font-semibold text-sm sm:text-base">Coding in
                    Progress...</span>
                </div>
                <span className="text-[#A3D1FF] font-mono text-sm sm:text-base">100%</span>
              </div>
              <div className="h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden mb-3 sm:mb-4">
                <div
                  className="h-full bg-gradient-to-r from-[#A3D1FF] to-[#92bce6] rounded-full transition-all duration-300 relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#A3D1FF]/0 via-white/20 to-[#A3D1FF]/0 animate-[shine_1s_ease-in-out_infinite]">
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-lg bg-white/5">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <Image
                      className="lucide lucide-paintbrush w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400"
                      src="/design.svg"
                      alt="design"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                    <span className="text-xs sm:text-sm text-gray-400">Design Phase</span>
                  </div>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    <li className="flex items-center gap-1.5 sm:gap-2 text-[#A3D1FF]">✓ User Research
                    </li>
                    <li className="flex items-center gap-1.5 sm:gap-2 text-[#A3D1FF]">✓ Wireframing</li>
                    <li className="flex items-center gap-1.5 sm:gap-2 text-[#A3D1FF]">✓ UI Design</li>
                  </ul>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-[#A3D1FF]/10 border border-[#A3D1FF]">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <Image
                      className="lucide lucide-code w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#A3D1FF]"
                      src="/code.svg"
                      alt="code"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                    <span className="text-xs sm:text-sm text-[#A3D1FF]">Development Phase</span>
                  </div>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    <li className="flex items-center gap-1.5 sm:gap-2 text-[#A3D1FF]">✓ Frontend</li>
                    <li className="flex items-center gap-1.5 sm:gap-2 text-[#A3D1FF]">✓ Backend</li>
                    <li className="flex items-center gap-1.5 sm:gap-2 text-[#A3D1FF]">✓ Testing</li>
                  </ul>
                </div>
              </div>
              <div
                className="mt-3 sm:mt-4 text-center text-[#A3D1FF] font-semibold text-xs sm:text-sm animate-fade-in">
                Project Successfully Completed! 🎉</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div
              className="bg-[#1b1b1b] p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group hover:transform hover:-translate-y-2 duration-300 opacity-0 translate-y-10 opacity-100 translate-y-0">
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
                <div className="bg-[#A3D1FF]/10 p-3 sm:p-4 rounded-xl relative">
                  <Image
                    className="lucide lucide-target w-6 h-6 sm:w-8 sm:h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/fde-icon-1.svg"
                    alt="icon"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">
                Strategy &amp; Planning
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">Strategic planning and roadmap
                development that align with your business goals — delivering up to 35% ROI growth.</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Market
                  Research</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">User
                  Analysis</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Competitive
                  Analysis</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">ROI
                  Planning</span>
              </div>
            </div>
            <div
              className="bg-[#1b1b1b] p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group hover:transform hover:-translate-y-2 duration-300 opacity-0 translate-y-10 opacity-100 translate-y-0">
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
                <div className="bg-[#A3D1FF]/10 p-3 sm:p-4 rounded-xl relative">
                  <Image
                    className="lucide lucide-users w-6 h-6 sm:w-8 sm:h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/fde-icon-2.svg"
                    alt="icon"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">UI/UX Design
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">Increase conversions by 40%
                through user-centered design that turns visitors into loyal customers.</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">User
                  Research</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Wireframing</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Prototyping</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Design
                  Systems</span>
              </div>
            </div>
            <div
              className="bg-[#1b1b1b] p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group hover:transform hover:-translate-y-2 duration-300 opacity-0 translate-y-10 opacity-100 translate-y-0">
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
                <div className="bg-[#A3D1FF]/10 p-3 sm:p-4 rounded-xl relative">
                  <Image
                    className="lucide lucide-code w-6 h-6 sm:w-8 sm:h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/fde-icon-3.svg"
                    alt="icon"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">Development
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                Reach a 98/100 PageSpeed score through cutting-edge technologies and performance-focused
                optimization.</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">React/Next.js</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Node.js</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">TypeScript</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">API
                  Development</span>
              </div>
            </div>
            <div
              className="bg-[#1b1b1b] p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group hover:transform hover:-translate-y-2 duration-300 opacity-0 translate-y-10 opacity-100 translate-y-0">
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
                <div className="bg-[#A3D1FF]/10 p-3 sm:p-4 rounded-xl relative">
                  <Image
                    className="lucide lucide-database w-6 h-6 sm:w-8 sm:h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/fde-icon-4.svg"
                    alt="icon"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">Database
                Architecture</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                Reduce latency by 60% using well-architected database solutions tailored for
                scalability.</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Schema
                  Design</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Data
                  Modeling</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Query
                  Optimization</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Migration
                  Strategy</span>
              </div>
            </div>
            <div
              className="bg-[#1b1b1b] p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group hover:transform hover:-translate-y-2 duration-300 opacity-0 translate-y-10 opacity-100 translate-y-0">
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
                <div className="bg-[#A3D1FF]/10 p-3 sm:p-4 rounded-xl relative">
                  <Image
                    className="lucide lucide-shield w-6 h-6 sm:w-8 sm:h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/fde-icon-5.svg"
                    alt="icon"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">Security
                &amp; Performance</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">Keep user data safe and services
                online with trusted security measures and high-availability infrastructure.</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Security
                  Audits</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Performance
                  Testing</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Load
                  Balancing</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Caching
                  Strategy</span>
              </div>
            </div>
            <div
              className="bg-[#1b1b1b] p-6 sm:p-8 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group hover:transform hover:-translate-y-2 duration-300 opacity-0 translate-y-10 opacity-100 translate-y-0">
              <div className="relative mb-4 sm:mb-6">
                <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
                <div className="bg-[#A3D1FF]/10 p-3 sm:p-4 rounded-xl relative">
                  <Image
                    className="lucide lucide-sparkles w-6 h-6 sm:w-8 sm:h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform"
                    src="/fde-icon-6.svg"
                    alt="icon"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">AI Integration
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                Reduce manual workload by 60% with AI solutions that drive efficiency and improve
                customer engagement.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">AI/ML
                  Integration</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Natural
                  Language</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Computer
                  Vision</span>
                <span
                  className="px-2 sm:px-3 py-1 bg-white/5 rounded-full text-xs sm:text-sm text-white hover:bg-[#A3D1FF]/20 transition-colors">Predictive
                  Analytics</span>
              </div>
            </div>
          </div>

          <div
            className="mt-8 sm:mt-12 md:mt-20 bg-[#1b1b1b] p-6 sm:p-8 rounded-xl border border-white/10 transform transition-all duration-1000 hover:border-[#A3D1FF]">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Our Development
                  Process</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start">
                    <div
                      className="bg-[#A3D1FF] text-black w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 flex-shrink-0">
                      1</div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 mt-8">
                        Discovery &amp; Strategy</h4>
                      <p className="text-sm sm:text-base text-gray-400">
                        Achieve <strong className="text-white">35% more effective project
                          outcomes</strong> through comprehensive research and strategic
                        planning.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div
                      className="bg-[#A3D1FF] text-black w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 flex-shrink-0">
                      2</div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 mt-8">
                        Design &amp; Prototyping
                      </h4>
                      <p className="text-sm sm:text-base text-gray-400">

                        Drive <strong className="text-white">40% higher user engagement</strong>
                        with user-tested interfaces and interactive prototypes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div
                      className="bg-[#A3D1FF] text-black w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 flex-shrink-0">
                      3</div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 mt-8">
                        Development &amp; Testing</h4>
                      <p className="text-sm sm:text-base text-gray-400">
                        Deliver <strong className="text-white">98/100 PageSpeed scores</strong> via
                        optimized code and rigorous quality assurance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div
                      className="bg-[#A3D1FF] text-black w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 flex-shrink-0">
                      4</div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 mt-8">
                        Launch &amp; Support</h4>
                      <p className="text-sm sm:text-base text-gray-400">
                        Ensure <strong className="text-white">99.9% uptime</strong> with continuous
                        monitoring and proactive maintenance.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Technologies We Use
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Frontend</h4>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                      <li className="flex items-center"><span
                        className="w-1.5 h-1.5 bg-[#A3D1FF] rounded-full mr-2"></span>Angular
                      </li>
                      <li className="flex items-center"><span
                        className="w-1.5 h-1.5 bg-[#A3D1FF] rounded-full mr-2"></span>Shopify
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#A3D1FF] rounded-full mr-2"></span>React
                        &amp; Next.js
                      </li>
                      <li className="flex items-center">
                        <span
                          className="w-1.5 h-1.5 bg-[#A3D1FF] rounded-full mr-2"></span>TypeScript
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#A3D1FF] rounded-full mr-2"></span>Tailwind
                        CSS
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#A3D1FF] rounded-full mr-2"></span>Framer
                        Motion
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Backend</h4>
                    <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#A3D1FF] rounded-full mr-2"></span>Node.js
                      </li>
                      <li className="flex items-center">
                        <span
                          className="w-1.5 h-1.5 bg-[#A3D1FF] rounded-full mr-2"></span>PostgreSQL
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#A3D1FF] rounded-full mr-2"></span>GraphQL
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#A3D1FF] rounded-full mr-2"></span>Laravel
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden text-center mb-8 sm:mb-12 md:mb-16">
            <div className="anim-title">
              <span
                className="inline-block px-4 py-2 rounded-full bg-[#A3D1FF]/10 text-[#A3D1FF] text-sm mb-4 sm:mb-6">Services</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                What We Deliver
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                <strong className="text-white">Tailored strategies delivering results</strong> aligned with
                your specific business goals.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div
              className="relative overflow-hidden bg-[#1b1b1b] p-6 sm:p-8 rounded-xl border border-white/10 h-full">
              <div className="absolute inset-0 rounded-[inherit] pointer-events-none"></div>
              <div className="relative z-1">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
                  <div className="bg-[#A3D1FF]/10 p-4 rounded-xl relative">
                    <Image
                      className="lucide lucide-globe w-6 h-6 sm:w-8 sm:h-8 text-[#A3D1FF]"
                      src="/wd-icon-1.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Web Development</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                  <strong className="text-white">SEO-ready websites</strong>
                  that load in under 2 seconds and drive up to <strong className="text-white">40% more
                    leads</strong>.
                </p>
                <ul className="space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="lucide lucide-arrow-right w-3 h-3 sm:w-4 sm:h-4 text-[#A3D1FF] mr-2"
                      src="/arrow4.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                    98/100 PageSpeed score
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="lucide lucide-arrow-right w-3 h-3 sm:w-4 sm:h-4 text-[#A3D1FF] mr-2"
                      src="/arrow4.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                    Mobile-first responsive design
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="lucide lucide-arrow-right w-3 h-3 sm:w-4 sm:h-4 text-[#A3D1FF] mr-2"
                      src="/arrow4.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                    Conversion-optimized layouts
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="relative overflow-hidden bg-[#1b1b1b] p-6 sm:p-8 rounded-xl border border-white/10 h-full">
              <div className="absolute inset-0 rounded-[inherit] pointer-events-none"></div>
              <div className="relative z-1">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
                  <div className="bg-[#A3D1FF]/10 p-4 rounded-xl relative">
                    <Image
                      className="lucide lucide-palette w-6 h-6 sm:w-8 sm:h-8 text-[#A3D1FF]"
                      src="/wd-icon-2.svg"
                      alt="icon"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">UI/UX Design</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                  <strong className="text-white">User-centered designs</strong> that increase engagement
                  by
                  <strong className="text-white">35%</strong> and reduce bounce rates by
                  <strong className="text-white">40%</strong>.
                </p>
                <ul className="space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="lucide lucide-arrow-right w-3 h-3 sm:w-4 sm:h-4 text-[#A3D1FF] mr-2"
                      src="/arrow4.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                    Data-driven design decisions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="lucide lucide-arrow-right w-3 h-3 sm:w-4 sm:h-4 text-[#A3D1FF] mr-2"
                      src="/arrow4.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                    Intuitive user journeys
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="lucide lucide-arrow-right w-3 h-3 sm:w-4 sm:h-4 text-[#A3D1FF] mr-2"
                      src="/arrow4.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                    A/B tested interfaces
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="relative overflow-hidden bg-[#1b1b1b] p-6 sm:p-8 rounded-xl border border-white/10 h-full">
              <div className="absolute inset-0 rounded-[inherit] pointer-events-none"></div>
              <div className="relative z-1">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
                  <div className="bg-[#A3D1FF]/10 p-4 rounded-xl relative">
                    <Image
                      className="lucide lucide-award w-6 h-6 sm:w-8 sm:h-8 text-[#A3D1FF]"
                      src="/wd-icon-3.svg"
                      alt="icon"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">SaaS Development</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                  <strong className="text-white">End-to-end SaaS solutions</strong> that reduce
                  operational costs by <strong className="text-white">25%</strong> and scale with your
                  business.
                </p>
                <ul className="space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="lucide lucide-arrow-right w-3 h-3 sm:w-4 sm:h-4 text-[#A3D1FF] mr-2"
                      src="/arrow4.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                    Scalable architecture
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="lucide lucide-arrow-right w-3 h-3 sm:w-4 sm:h-4 text-[#A3D1FF] mr-2"
                      src="/arrow4.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                    99.9% uptime guarantee
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="lucide lucide-arrow-right w-3 h-3 sm:w-4 sm:h-4 text-[#A3D1FF] mr-2"
                      src="/arrow4.svg"
                      alt="logo"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                    Secure data handling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative bg-white/7">
        {/* <canvas className='connecting-dots absolute inset-0 w-full h-full z-0'></canvas> */}
         <CanvasDots />
        <div className="max-w-7xl mx-auto text-center relative z-10 anim-title">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Transform Your Business?
            </h2>
            <p className="sm:text-xl text-sm text-gray-400 mb-8 max-w-2xl mx-auto">
              <strong className="text-white">Unlock your free 30-minute strategy consultation</strong> and see
              how our proven approach delivers <strong className="text-white">measurable results and market
                leadership</strong>.
            </p>
            <div className="inline-block">
              <a href="#" target="_blank" rel="noopener noreferrer"
                className="bg-[#A3D1FF] text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-[#92bce6] transition-all duration-300 inline-flex items-center relative overflow-hidden group">
                <span className="relative z-10 flex items-center">Claim Your Free Strategy Call
                  <Image
                    className="lucide lucide-arrow-right ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300"
                    src="/arrow5.svg"
                    alt="icon"
                    width={0}
                    height={0}
                    sizes='auto'
                    priority
                  />
                </span>
                <span
                  className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">Limited availability. No obligation. 100% confidential.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
