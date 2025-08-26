import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React from 'react'
import Image from "next/image";

function PortfolioCarousel() {
    const settings = {
        speed: 800,
        fade: true,
        cssEase: 'linear'
    };
    return (
        <>
            <Slider {...settings}>
                <div
                    className="relative w-full !h-[400px] sm:!h-[450px] md:!h-[500px] overflow-hidden bg-[#1b1b1b] rounded-xl border border-white/10">
                    <div className="absolute inset-0 grid md:grid-cols-2">
                        <div className="relative overflow-hidden">
                            <Image
                                className="w-full h-full object-cover"
                                src="/natura.png"
                                alt="Natura"
                                fill
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
                                            width={16}
                                            height={16}
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
                                fill
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
                                            width={16}
                                            height={16}
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
                                fill
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
                                            width={16}
                                            height={16}
                                            priority
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    )
}

export default PortfolioCarousel