import Image from "next/image";
import React from 'react';
import Link from "next/link";
import CanvasDots from "@/components/CanvasDots";

function AboutUs() {
  return (
    <>
      <section className="relative lg:p-24 p-0 lg:pt-0 pt-[100px] min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            className="w-full h-full object-cover"
            src="/natura.png"
            alt="Banner"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About Daisyn
            </h1>
            <h2 className="text-xl sm:text-2xl text-[#A3D1FF] mb-6">
              Full Stack Design &amp; Development
            </h2>
            <p className="text-2xl sm:text-3xl font-semibold text-[#A3D1FF] mb-6" >
              Tackling Digital Obstacles with Design and Development Expertise
            </p>
            <p className="text-xl text-gray-300 mb-8" >We are a full-stack design and development firm focused on delivering digital solutions that drive business value. Our work blends visual clarity with technical precision to create solutions that address real business needs.</p>
            <p className="text-xl text-gray-300 mb-8" >
              By combining creative strategy with deep technical expertise, we build digital experiences that are both elegant and effective. Every project is designed to scale, perform reliably, and deliver measurable results — ensuring your digital presence supports long-term growth and success.</p>
            <div className="flex flex-wrap gap-4" >
              <div className="inline-block " >
                <Link className="mr_btn mr_btn_outline" href="/work"><span>View Portfolio</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-12 text-white">The Problems We Solve</h2>
            <div className="bg-[#1b1b1b] md:p-8 p-6 rounded-lg shadow-md mb-16">
              <p className="text-xl text-gray-300 mb-6">We frequently assist clients encountering barriers to their digital advancement.</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Image
                      className="lucide lucide-arrow-right w-5 h-5 text-[#A3D1FF] mt-1 mr-3 flex-shrink-0"
                      src="/arrow6.svg"
                      alt="icon"
                      width={20}
                      height={20}
                      priority
                    />
                    <p className="text-white">An outdated online presence that no longer aligns with their brand's image and objectives.</p>
                  </div>
                  <div className="flex items-start">
                    <Image
                      className="lucide lucide-arrow-right w-5 h-5 text-[#A3D1FF] mt-1 mr-3 flex-shrink-0"
                      src="/arrow6.svg"
                      alt="icon"
                      width={20}
                      height={20}
                      priority
                    />
                    <p className="text-white">Low conversion rates despite steady traffic, with visitors leaving before completing key actions.</p>
                  </div>
                  <div className="flex items-start">
                    <Image
                      className="lucide lucide-arrow-right w-5 h-5 text-[#A3D1FF] mt-1 mr-3 flex-shrink-0"
                      src="/arrow6.svg"
                      alt="icon"
                      width={20}
                      height={20}
                      priority
                    />
                    <p className="text-white">Slow and underperforming websites that create frustration for users and negatively impact SEO rankings.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Image
                      className="lucide lucide-arrow-right w-5 h-5 text-[#A3D1FF] mt-1 mr-3 flex-shrink-0"
                      src="/arrow6.svg"
                      alt="icon"
                      width={20}
                      height={20}
                      priority
                    />
                    <p className="text-white">Fragmented systems that require manual intervention, which could be automated for greater efficiency.</p>
                  </div>
                  <div className="flex items-start">
                    <Image
                      className="lucide lucide-arrow-right w-5 h-5 text-[#A3D1FF] mt-1 mr-3 flex-shrink-0"
                      src="/arrow6.svg"
                      alt="icon"
                      width={20}
                      height={20}
                      priority
                    />
                    <p className="text-white">Challenges in converting business concepts into clear technical specifications.</p>
                  </div>
                  <div className="flex items-start">
                    <Image
                      className="lucide lucide-arrow-right w-5 h-5 text-[#A3D1FF] mt-1 mr-3 flex-shrink-0"
                      src="/arrow6.svg"
                      alt="icon"
                      width={20}
                      height={20}
                      priority
                    />
                    <p className="text-white">A lack of a cohesive strategy for digital initiatives and technology investments.</p>
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-300 mt-6">Our approach integrates strategic insight with technical expertise to address these challenges. We don't merely build websites or apps; we craft digital experiences that tackle real business issues and deliver tangible, measurable outcomes.</p>
            </div>
          </div>
          <div >
            <h2 className="text-3xl font-bold text-white mb-12">Our Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1b1b1b] md:p-8 p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group h-full">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
                  <div className="bg-[#A3D1FF]/10 p-4 rounded-xl relative">
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
                <h3 className="text-xl font-semibold mb-2 text-white">Strategy &amp; Planning</h3>
                <p className="text-gray-400">Comprehensive strategic planning and roadmap creation tailored to align with your business objectives.</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#A3D1FF]">
                    Market Research
                  </span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#A3D1FF]">
                    User Analysis
                  </span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#A3D1FF]">
                    Competitive Analysis
                  </span>
                </div>
              </div>
              <div className="bg-[#1b1b1b] md:p-8 p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group h-full">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
                  <div className="bg-[#A3D1FF]/10 p-4 rounded-xl relative">
                    <Image
                      className="lucide lucide-target w-6 h-6 sm:w-8 sm:h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform"
                      src="/fde-icon-2.svg"
                      alt="icon"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">UI/UX Design</h3>
                <p className="text-gray-400">
                  User-focused design that converts visitors into loyal customers.
                  </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#A3D1FF]">
                    User Research
                  </span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#A3D1FF]">Wireframing</span><span className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#A3D1FF]">Prototyping</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#A3D1FF]">
                    Design Systems
                  </span>
                </div>
              </div>
              <div className="bg-[#1b1b1b] md:p-8 p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all group h-full">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
                  <div className="bg-[#A3D1FF]/10 p-4 rounded-xl relative">
                    <Image
                      className="lucide lucide-target w-6 h-6 sm:w-8 sm:h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform"
                      src="/fde-icon-3.svg"
                      alt="icon"
                      width={0}
                      height={0}
                      sizes='auto'
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Development</h3>
                <p className="text-gray-400">
                  Cutting-edge technologies and performance enhancements for outstanding results.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#A3D1FF]">React/Next.js</span><span className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#A3D1FF]">Node.js</span><span className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#A3D1FF]">TypeScript</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-[#A3D1FF]">API Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                className="!relative rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                src="/shantam-builders.png"
                alt="Hero"
                fill
                priority
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-12">Technical Skills</h2>
              <div className="grid gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-white">Design</h3>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2"><span className="text-white">UI/UX Design</span><span className="text-gray-400">95%</span></div>
                    <div className="h-2 bg-[#1b1b1b] rounded-full overflow-hidden">
                      <div className="h-full bg-[#A3D1FF] rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2"><span className="text-white">Design Systems</span><span className="text-gray-400">90%</span></div>
                    <div className="h-2 bg-[#1b1b1b] rounded-full overflow-hidden">
                      <div className="h-full bg-[#A3D1FF] rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2"><span className="text-white">Wireframing</span><span className="text-gray-400">95%</span></div>
                    <div className="h-2 bg-[#1b1b1b] rounded-full overflow-hidden">
                      <div className="h-full bg-[#A3D1FF] rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2"><span className="text-white">Prototyping</span><span className="text-gray-400">90%</span></div>
                    <div className="h-2 bg-[#1b1b1b] rounded-full overflow-hidden">
                      <div className="h-full bg-[#A3D1FF] rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-6 text-white">Development</h3>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2"><span className="text-white">React/Next.js</span><span className="text-gray-400">95%</span></div>
                    <div className="h-2 bg-[#1b1b1b] rounded-full overflow-hidden">
                      <div className="h-full bg-[#A3D1FF] rounded-full transition-all duration-1000" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2"><span className="text-white">TypeScript</span><span className="text-gray-400">90%</span></div>
                    <div className="h-2 bg-[#1b1b1b] rounded-full overflow-hidden">
                      <div className="h-full bg-[#A3D1FF] rounded-full transition-all duration-1000" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2"><span className="text-white">Node.js</span><span className="text-gray-400">85%</span>
                    </div>
                    <div className="h-2 bg-[#1b1b1b] rounded-full overflow-hidden">
                      <div className="h-full bg-[#A3D1FF] rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2"><span className="text-white">PostgreSQL</span><span className="text-gray-400">80%</span></div>
                    <div className="h-2 bg-[#1b1b1b] rounded-full overflow-hidden">
                      <div className="h-full bg-[#A3D1FF] rounded-full transition-all duration-1000" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12" >
            Our Approach
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div >
              <div className="bg-[#1b1b1b] md:p-8 p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all h-full">
                <h3 className="text-xl font-semibold text-white mb-4">Discover</h3>
                <p className="text-gray-400 mb-6">
                  Gaining Insight into Your Business Objectives, Challenges, and Market Landscape
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>Gather critical perspectives.</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>Identify key trends and opportunities.</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>Real customers to ensure a deep understanding of their needs.</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>Actionable insights to help you stay ahead.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div >
              <div className="bg-[#1b1b1b] md:p-8 p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all h-full">
                <h3 className="text-xl font-semibold text-white mb-4">Define</h3>
                <p className="text-gray-400 mb-6">Turning Research Insights into Actionable Strategies and Clear Requirements.</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>Strategic roadmap aligned with business goals</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>User personas based on real customer data</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>Optimized architecture for higher conversions</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>Scalable tech specs for future growth</span>
                  </li>
                </ul>
              </div>
            </div>
            <div >
              <div className="bg-[#1b1b1b] md:p-8 p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all h-full">
                <h3 className="text-xl font-semibold text-white mb-4">Design</h3>
                <p className="text-gray-400 mb-6">Designing Clear Interfaces and Smooth User Experiences</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>Wireframes guided by user data</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>UI design optimized for conversions</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>Prototypes for real-time user testing</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>Design systems for visual consistency</span>
                  </li>
                </ul>
              </div>
            </div>
            <div >
              <div className="bg-[#1b1b1b] md:p-8 p-6 rounded-xl border border-white/10 hover:border-[#A3D1FF] transition-all h-full">
                <h3 className="text-xl font-semibold text-white mb-4">Develop</h3>
                <p className="text-gray-400 mb-6">Developing Reliable and Scalable Solutions with Advanced Technologies</p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>SEO-friendly frontend development</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>Secure backend integration</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>Adherence to best practices for quality</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Image
                      className="mr-2"
                      src="/arrow2.svg"
                      alt="icon"
                      width={16}
                      height={16}
                      priority
                    />
                    <span>Thorough testing and quality assurance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8" >Why Work With Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div >
              <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Results-Driven</h3>
                <p className="text-gray-400">We prioritize crafting digital experiences that generate <strong className="text-white">tangible business results</strong>, beyond <strong className="text-white">aesthetics</strong> alone. Our solutions are designed to drive higher <strong className="text-white">conversion rates</strong> and <strong className="text-white">measurable growth.</strong></p>
              </div>
            </div>
            <div >
              <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Full-Stack Expertise</h3>
                <p className="text-gray-400">
                  With expertise across both <strong className="text-white">design and development</strong>, We deliver <strong className="text-white">seamless, end-to-end solutions</strong> without handoff challenges. This integrated approach <strong>accelerates project timelines</strong> and improves efficiency.
                </p>
              </div>
            </div>
            <div >
              <div className="bg-[#2d3035] p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Strategic Partner</h3>
                <p className="text-gray-400">We act as a trusted extension of your team, offering <strong className="text-white">strategic guidance</strong> that goes well beyond execution. Clients consistently report significantly enhanced <strong className="text-white">decision-making</strong> and markedly increased <strong className="text-white">operational efficiency</strong>.</p>
              </div>
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
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Ready to Discuss Your Project?</h2>
              <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-10 max-w-2xl mx-auto">
                Let's schedule a call to explore how I can help you achieve your digital goals.
              </p>
              <Link href="contact-us"
                className="bg-[#A3D1FF] text-black px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-[#92bce6] transition-colors inline-flex items-center text-base md:text-lg font-semibold group">
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
        </div>
      </section>
    </>
  )
}

export default AboutUs