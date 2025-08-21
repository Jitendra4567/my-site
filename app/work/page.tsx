import CanvasDots from "@/components/CanvasDots";
import Image from "next/image";
import Link from "next/link";
import React from 'react'

function Work() {
  return (
    <>
      <main className="relative pt-[4.236rem]">
        <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              className="w-full h-full object-cover"
              src="/natura.png"
              alt="Hero"
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" style={{ backdropFilter: 'blur(1px)' }}></div>
          </div>
          <div className="container-custom relative z-10 py-16 md:py-0">
            <div className="overflow-hidden max-w-3xl">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                  Featured Work
                </h1>
                <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">
                  Unlock the power of digital innovation with our results-driven solutions—where impactful design meets cutting-edge development to drive your business forward.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 mt-8 md:mt-12">
              <div className="bg-[#1b1b1b]/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all text-center">
                <div className="text-2xl md:text-4xl font-bold text-[#A3D1FF] mb-1 md:mb-2 counter">70+</div>
                <div className="text-xs md:text-base text-gray-400">Projects Completed</div>
              </div>
              <div
                className="bg-[#1b1b1b]/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all text-center">
                <div className="text-2xl md:text-4xl font-bold text-[#A3D1FF] mb-1 md:mb-2 counter">40+</div>
                <div className="text-xs md:text-base text-gray-400">Happy Clients</div>
              </div>
              <div
                className="bg-[#1b1b1b]/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all text-center">
                <div className="text-2xl md:text-4xl font-bold text-[#A3D1FF] mb-1 md:mb-2 counter">6+</div>
                <div className="text-xs md:text-base text-gray-400">Years Experience</div>
              </div>
              <div
                className="bg-[#1b1b1b]/80 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all text-center">
                <div className="text-2xl md:text-4xl font-bold text-[#A3D1FF] mb-1 md:mb-2 counter">95%</div>
                <div className="text-xs md:text-base text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" >
              <div className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group col-span-full mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <Image
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      src="/natura.png"
                      alt="Hero"
                      fill
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#A3D1FF] text-sm bg-[#A3D1FF]/10 px-4 py-2 rounded-full">Featured Project</span>
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">Natura</h3>
                    <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6">It seems the business world is synonymous with hard, boring work, suits and ties, shopping and acquisitions, producing, consuming, more, more, more..</p>
                    <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                      <div className="flex items-center text-xs md:text-sm">
                        <Image
                          className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                          src="/check.svg"
                          alt="icon"
                          width={16}
                          height={16}
                          priority
                        />
                        <span className="text-gray-300">250% increase in engagement</span>
                      </div>
                      <div className="flex items-center text-xs md:text-sm">
                        <Image
                          className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                          src="/check.svg"
                          alt="Hero"
                          width={16}
                          height={16}
                          priority
                        />
                        <span className="text-gray-300">5 countries impacted</span>
                      </div>
                      <div className="flex items-center text-xs md:text-sm">
                        <Image
                          className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                          src="/check.svg"
                          alt="Hero"
                          width={16}
                          height={16}
                          priority
                        />
                        <span className="text-gray-300">700,000+ people served</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      <span className="px-2 md:px-3 py-1 bg-white/5 text-[#A3D1FF] rounded-full text-xs md:text-sm">Shopify</span>
                      <span className="px-2 md:px-3 py-1 bg-white/5 text-[#A3D1FF] rounded-full text-xs md:text-sm">Paypal</span>
                      <span className="px-2 md:px-3 py-1 bg-white/5 text-[#A3D1FF] rounded-full text-xs md:text-sm">Apple Pay</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Link href="https://naturaselection.com/" target="_blank" className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 border border-[#A3D1FF] text-[#A3D1FF] rounded-lg group-hover:bg-[#A3D1FF] group-hover:text-black transition-colors text-xs md:text-sm font-medium">
                        View Live Website
                        <Image
                          className="w-4 h-4 group-hover:brightness-[0%]"
                          src="/arrow7.svg"
                          alt="icon"
                          width={12}
                          height={12}
                          priority
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group h-full">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <Image
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    src="/bomboneriapons.png"
                    alt="Hero"
                    width={0}
                    height={0}
                    sizes="auto"
                    priority
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Bomboneriapons</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">You'll find a showcase of all our products, sorted by category, holiday, and ratings, making it easier for you to find what you're looking for.</p>
                  <div className="space-y-2 mb-3 sm:mb-4">
                    <div className="flex items-start text-xs">
                      <Image
                        className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                        src="/check.svg"
                        alt="Hero"
                        width={16}
                        height={16}
                        priority
                      />

                      <span className="text-gray-300">High performance score</span>
                    </div>
                    <div className="flex items-start text-xs">
                      <Image
                        className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                        src="/check.svg"
                        alt="Hero"
                        width={16}
                        height={16}
                        priority
                      />
                      <span className="text-gray-300">Increased engagement</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">React</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">JavaScript</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">Shopify</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">jQuery</span>
                    <span className="px-2 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs">+1</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link href="https://bomboneriapons.com" target="_blank" className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 border border-[#A3D1FF] text-[#A3D1FF] rounded-lg group-hover:bg-[#A3D1FF] group-hover:text-black transition-colors text-xs font-medium">
                      View Live Website
                      <Image
                        className="w-3 h-3 group-hover:brightness-[0%]"
                        src="/arrow7.svg"
                        alt="Hero"
                        width={12}
                        height={12}
                        priority
                      />
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group h-full">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <Image
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    src="/aceroconstruction.png"
                    alt="Hero"
                    width={0}
                    height={0}
                    sizes="auto"
                    priority
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Acero</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Acero construction discover the projects that showcase his commitment to quality and excellence.</p>
                  <div className="space-y-2 mb-3 sm:mb-4">
                    <div className="flex items-start text-xs">
                      <Image
                        className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                        src="/check.svg"
                        alt="icon"
                        width={16}
                        height={16}
                        priority
                      />
                      <span className="text-gray-300">High performance score</span>
                    </div>
                    <div className="flex items-start text-xs">
                      <Image
                        className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                        src="/check.svg"
                        alt="icon"
                        width={16}
                        height={16}
                        priority
                      />
                      <span className="text-gray-300">Increased engagement</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">Wordpress</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">Bootstrap</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">SEO</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">jQuery</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link href="https://aceroconstruction.com.au"
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 border border-[#A3D1FF] text-[#A3D1FF] rounded-lg group-hover:bg-[#A3D1FF] group-hover:text-black transition-colors text-xs font-medium">View
                      Live Website
                      <Image
                        className="w-3 h-3 group-hover:brightness-[0%]"
                        src="/arrow7.svg"
                        alt="icon"
                        width={12}
                        height={12}
                        priority
                      />
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group h-full">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <Image
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    src="/shantam-builders.png"
                    alt="Hero"
                    width={0}
                    height={0}
                    sizes="auto"
                    priority
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Shantam Builders</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">A dynamic platform showcasing construction projects, builder portfolios, and completed developments.</p>
                  <div className="space-y-2 mb-3 sm:mb-4">
                    <div className="flex items-start text-xs">
                      <Image
                        className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                        src="/check.svg"
                        alt="icon"
                        width={16}
                        height={16}
                        priority
                      />
                      <span className="text-gray-300">High performance score</span>
                    </div>
                    <div className="flex items-start text-xs">
                      <Image
                        className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                        src="/check.svg"
                        alt="icon"
                        width={16}
                        height={16}
                        priority
                      />
                      <span className="text-gray-300">Increased engagement</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">Animation</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">HTML</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">jQuery</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">+1</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link href="https://www.shantambuilders.com"
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 border border-[#A3D1FF] text-[#A3D1FF] rounded-lg group-hover:bg-[#A3D1FF] group-hover:text-black transition-colors text-xs font-medium">View
                      Live Website
                      <Image
                        className="w-3 h-3 group-hover:brightness-[0%]"
                        src="/arrow7.svg"
                        alt="icon"
                        width={12}
                        height={12}
                        priority
                      />
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group h-full">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <Image
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    src="/Jewelxy.png"
                    alt="Hero"
                    width={0}
                    height={0}
                    sizes="auto"
                    priority
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Jewelxy</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Discover, Explore, and Indulge. Jewelxy is more than just a marketplace</p>
                  <div className="space-y-2 mb-3 sm:mb-4">
                    <div className="flex items-start text-xs">
                      <Image
                        className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                        src="/check.svg"
                        alt="icon"
                        width={16}
                        height={16}
                        priority
                      />
                      <span className="text-gray-300">Increased template usage</span>
                    </div>
                    <div className="flex items-start text-xs">
                      <Image
                        className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                        src="/check.svg"
                        alt="icon"
                        width={16}
                        height={16}
                        priority
                      />
                      <span className="text-gray-300">Faster page load times</span>
                    </div>
                    <div className="flex items-start text-xs">
                      <Image
                        className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                        src="/check.svg"
                        alt="icon"
                        width={16}
                        height={16}
                        priority
                      />
                      <span className="text-gray-300">High customer rating</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">Angular</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">Laravel</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">Bootstrap</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">+1</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link href="https://www.jewelxy.com"
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 border border-[#A3D1FF] text-[#A3D1FF] rounded-lg group-hover:bg-[#A3D1FF] group-hover:text-black transition-colors text-xs font-medium">View
                      Live Website
                      <Image
                        className="w-3 h-3 group-hover:brightness-[0%]"
                        src="/arrow7.svg"
                        alt="icon"
                        width={12}
                        height={12}
                        priority
                      />
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group h-full">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <Image
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    src="/perfecthome .png"
                    alt="Hero"
                    width={0}
                    height={0}
                    sizes="auto"
                    priority
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Find Perfect Home</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Start by defining your needs and budget, then research neighborhoods and properties</p>
                  <div className="space-y-2 mb-3 sm:mb-4">
                    <div className="flex items-start text-xs">
                      <Image
                        className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                        src="/check.svg"
                        alt="icon"
                        width={16}
                        height={16}
                        priority
                      />
                      <span className="text-gray-300">Faster metadata processing</span>
                    </div>
                    <div className="flex items-start text-xs">
                      <Image
                        className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                        src="/check.svg"
                        alt="icon"
                        width={16}
                        height={16}
                        priority
                      />
                      <span className="text-gray-300">High user satisfaction</span>
                    </div>
                    <div className="flex items-start text-xs">
                      <Image
                        className="lucide lucide-circle-check w-4 h-4 text-[#A3D1FF] mr-2 flex-shrink-0"
                        src="/check.svg"
                        alt="icon"
                        width={16}
                        height={16}
                        priority
                      />
                      <span className="text-gray-300">High customer rating</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">React</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">Node.js</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">MongoDB</span>
                    <span className="px-2 sm:px-3 py-0.5 bg-white/5 text-[#A3D1FF] rounded-full text-xs sm:text-sm">+1</span>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1b1b1b] to-black relative overflow-hidden">
            <CanvasDots />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="overflow-hidden ">
              <div >
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Ready to Create Your
                  Success Story?</h2>
                <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-10 max-w-2xl mx-auto">Let's build
                  something extraordinary together that drives real results for your business.</p>
                <Link href="contact-us"
                  className="bg-[#A3D1FF] text-black px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-[#92bce6] transition-colors inline-flex items-center text-base md:text-lg font-semibold group">Start
                  Your Project
                  <Image
                    className="ml-1"
                    src="/arrow5.svg"
                    alt="icon"
                    width={24}
                    height={24}
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Work