import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
      <footer className=" border-t border-white/10 ">
        <div className="footer-main bg-[#1b1b1b]">
          <div className="container-custom section-spacing-sm">
            <div className="footer-wrapper sm:flex block flex-wrap justify-between">
              <div className="sm:w-[40%] w-full sm:mb-0 mb-4">
                <h3 className="text-white font-semibold mb-4 md:text-4xl text-2xl">Feeling inspired?</h3>
                <p className="text-gray-400 mb-4">Let's create your next big idea.</p>
                <div className="inline-block">
                  <Link href="/contact-us"
                    className="inline-flex items-center px-6 py-3 bg-[#A3D1FF] text-black rounded-lg hover:bg-[#92bce6] transition-colors">
                      Get in Touch
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
              <div className="sm:mb-0 mb-4">
                <h3 className="text-white font-semibold mb-4 md:text-4xl text-2xl">Explore</h3>
                <ul className="space-y-2">
                  <li>
                      <Link className="text-gray-400 hover:text-white transition-colors" href="/">Home</Link>
                  </li>
                  <li>
                      <Link className="text-gray-400 hover:text-white transition-colors" href="/about">AboutUs</Link>
                  </li>
                  <li>
                      <Link className="text-gray-400 hover:text-white transition-colors" href="/work">Work</Link>
                  </li>
                  <li>
                      <Link className="text-gray-400 hover:text-white transition-colors" href="/services">Services</Link>
                  </li>
                  <li>
                      <Link className="text-gray-400 hover:text-white transition-colors" href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4 md:text-4xl text-2xl">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a className="text-gray-400 hover:text-white transition-colors" >
                      +1234567890
                    </a>
                  </li>
                  <li>
                    <Link href="mailto:info@daisyn.com" className="text-gray-400 hover:text-white transition-colors" >
                      info@daisyn.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 pb-12 footer-bottom">
          <div className="text-white opacity-[.1] text-center text-[10vw] font-black">
            Bringing ideas to life
          </div>
          <div className="sm:mt-12 mt-3 pt-8 text-center text-gray-400 opacity-[.4]">
            © 2025 All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer