import Image from "next/image";
import React from 'react'

function ContactUs() {
  return (
    <>
      <main className="relative pt-[4.236rem]">
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let’s Build Something Remarkable Together
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Let’s elevate your digital presence — complete the form below, and I’ll respond within 24 hours.
            </p>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div
              className="relative overflow-hidden bg-[#1b1b1b]  p-8 rounded-xl border border-white/10 hover:border-[#a3d1ff] transition-all duration-300 group">
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#A3D1FF]/20 to-transparent z-0 opacity-0 group-hover:opacity-100">
              </div>
              <div className="relative z-1">
                <form className="space-y-6" action="https://formsubmit.co/jitendra.parmar4567@gmail.com" method="POST">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        className="w-full px-4 py-3 bg-[#2d3035] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3D1FF] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        className="w-full px-4 py-3 bg-[#2d3035] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3D1FF] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-[#2d3035] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3D1FF] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      What are you interested in? *
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full px-4 py-3 bg-[#2d3035] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#A3D1FF] focus:border-transparent"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Design Systems">Design Systems</option>
                      <option value="Brand Design">Brand Design</option>
                      <option value="API Development">API Development</option>
                      <option value="SaaS Development">SaaS Development</option>
                      <option value="Startup MVP">Startup MVP</option>
                      <option value="UX/UI Mentorship">UX/UI Mentorship</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Tell me about your
                      project *</label>
                    <textarea name="description" required rows="4"
                      className="w-full px-4 py-3 bg-[#2d3035] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3D1FF] focus:border-transparent"
                      placeholder="What are your goals? What challenges are you facing? Any specific requirements or timeline?"
                      aria-required="true"></textarea>
                  </div>
                  <div className="inline-block ">
                    <button type="submit"
                      className="w-full bg-[#A3D1FF] text-black px-6 py-3 rounded-lg hover:bg-[#92bce6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
                    >Let's Make It Happen
                      <Image
                        className="ml-2 w-5 h-5"
                        src="/arrow5.svg"
                        alt="icon"
                        width={20}
                        height={20}
                        priority
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ContactUs