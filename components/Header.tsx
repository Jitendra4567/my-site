import Image from "next/image";
import Link from "next/link";
import React from 'react'

function Header() {
    return (
        <>
            <header className="w-full transition-all duration-300 bg-black fixed left-0 right-0 top-0 z-50">
                <div className="container-custom">
                    <div className="flex items-center justify-between h-[4.236rem]">
                        <div className="flex-shrink-0">
                            <div className="inline-block relative">
                                <Link href="/" className="site-logo block">
                                    {/* <Image
                                        className="h-6 sm:h-8 w-auto object-contain"
                                        src="/logo.png"
                                        alt="logo"
                                        width={80}
                                        height={32}
                                        priority
                                    /> */}
                                    <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
                                    <div className="bg-[#A3D1FF]/10 p-4 rounded-xl relative w-[120px] h-[40px]"></div>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:flex items-center space-x-8">
                            <div className="relative group">
                                <Link className="block py-2 text-base font-medium transition-colors text-white hover:text-[#A3D1FF]" href="/">Home</Link>
                            </div>
                            <div className="relative group">
                                <Link className="block py-2 text-base font-medium transition-colors text-white hover:text-[#A3D1FF]" href="/about">AboutUs</Link>
                            </div>
                            <div className="relative group">
                                <Link className="block py-2 text-base font-medium transition-colors text-white hover:text-[#A3D1FF]" href="/work">Work</Link>
                            </div>
                            <div className="relative group">
                                <Link className="block py-2 text-base font-medium transition-colors text-white hover:text-[#A3D1FF]" href="/services">Services</Link>
                            </div>
                            <div className="inline-block">
                                <Link className="px-4 py-2 bg-[#A3D1FF] text-black rounded-lg hover:bg-[#92bce6] transition-colors text-sm font-medium" href="/contact-us">
                                    Get in Touch
                                </Link>
                            </div>
                        </div>
                        <button className="p-2 text-white hover:text-[#A3D1FF] transition-colors lg:hidden">
                            <div>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" className="lucide lucide-menu w-6 h-6">
                                <line x1="4" x2="20" y1="12" y2="12"></line>
                                <line x1="4" x2="20" y1="6" y2="6"></line>
                                <line x1="4" x2="20" y1="18" y2="18"></line>
                            </svg> */}
                            </div>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header