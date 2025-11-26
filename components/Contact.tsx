import Image from 'next/image';
import React from 'react'

type SectionProps = {
    id?: string;
};

const Contact: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className="bg-gradient-to-r from-[#062239] from-30% to-[#050d17] py-[3.5rem] md:py-[5rem] lg:py-[6rem] px-[.85rem] md:px-[2.1rem] lg:px-[4rem] 2xl:px-0 overflow-hidden">
            <div className="bg-[#052442] border border-[#0788ff]/[0.2] w-full lg:max-w-[82rem] mx-auto flex flex-col rounded-[0.375rem] mb-1">
                <div className="flex flex-col md:flex-row px-6 md:px-12 py-6 md:py-10">
                    <div className='md:w-[30%]'></div>
                    <div data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200" className='md:w-[76%] md:px-14'>
                        <h2 className="text-white opacity-90 text-[32px] md:text-[40px] font-[600] md:font-[500] leading-[1.2]">Let's Discuss Your Project</h2>
                        <p className="text-white bg-opacity-85 text-[17px] leading-7 mt-1 max-w-[550px]">
                            Always available for freelancing if the right project comes along.
                            Feel free to contact me.
                        </p>
                    </div>
                </div>
                <div className="bg-[#0788ff]/10 border-t border-[#0788ff]/[0.2] flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 px-6 md:px-7 md:py-[2rem] pb-7 md:pb-14">
                    <div className='md:w-[31%]'>
                        {/* Contact Image */}
                        <div className="hidden -mt-[185px] lg:flex flex-col justify-center items-center max-w-full px-4">
                            <div className='flex items-center justify-center'>
                                <Image src="/images/about-bg.webp" alt='about-banner' width={450} height={430} className='rounded-[20px] overflow-hidden' />
                            </div>

                        </div>
                        {/* Contact Details */}
                        <div className='hidden md:block px-4 mt-8'>
                            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0" className='break-words'>
                                <label className="text-white opacity-75 text-sm font-[400] uppercase">Write an E-mail</label>
                                <p className="text-white opacity-80 text-[20px] font-bold mt-1"><a href="mailto:folagbadeolowofela05@gmail.com">folagbadeolowofela05@gmail.com</a></p>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100" className='mt-6'>
                                <label className="text-white opacity-75 text-sm font-[400] uppercase">Call</label>
                                <p className="text-white opacity-80 text-[20px] font-bold mt-1"><a href="tel:+234 806 657 3156">+234 806 657 3156</a></p>
                            </div>
                        </div>
                        {/* Social Icons */}
                        <div data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300" className="hidden md:flex gap-2 mt-4 px-4">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/folagbade-olowofela" target='_blank' className="relative inline-flex items-center justify-center bg-[#1275b1] border-2 border-white h-[46px] w-[46px] rounded-full text-white hover:bg-blue-500 transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--fa-brands" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                            </a>
                            {/* Github */}
                            <a href="https://github.com/Marvel-Deone" target='_blank' className="relative inline-flex items-center justify-center bg-[#181717] border-2 border-white h-[46px] w-[46px] rounded-full text-white hover:bg-gray-800 transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385c.6.111.793-.26.793-.577v-2.162c-3.338.726-4.042-1.416-4.042-1.416c-.546-1.385-1.333-1.754-1.333-1.754c-1.089-.744.083-.729.083-.729c1.205.085 1.84 1.24 1.84 1.24c1.07 1.834 2.809 1.304 3.494.996c.108-.775.42-1.304.763-1.604c-2.665-.303-5.467-1.334-5.467-5.93c0-1.311.469-2.384 1.236-3.222c-.124-.303-.535-1.527.117-3.182c0 0 1.007-.322 3.3 1.23c.957-.266 1.98-.398 3-.403c1.02.005 2.043.137 3 .403c2.292-1.552 3.297-1.23 3.297-1.23c.653 1.655.242 2.88.12 3.182c.77.838 1.235 1.911 1.235 3.222c0 4.609-2.807 5.624-5.479 5.921c.431.372.815 1.103.815 2.222v3.293c0 .32.19.693.8.575C20.565 21.797 24 17.303 24 12C24 5.373 18.627 0 12 0"></path>
                                </svg>
                            </a>
                            {/* X */}
                            <a href="https://x.com/deevcoder" target='_blank' className="relative inline-flex items-center justify-center bg-[#181717] border-2 border-white h-[46px] w-[46px] rounded-full text-white hover:bg-gray-800 transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M18.244 2H21.5l-7.52 8.57L23 22h-6.313l-4.937-6.47L5.95 22H2.692l8.064-9.187L1 2h6.438l4.486 5.953L18.244 2Zm-2.27 17h1.884L7.145 4.104H5.164L15.974 19Z"
                                    />
                                </svg>
                            </a>
                            {/* Dev.to */}
                            <a href="https://dev.to/folagbade_olowofela" target='_blank' className="relative inline-flex items-center justify-center bg-[#0A0A0A] border-2 border-white h-[46px] w-[46px] rounded-full text-white hover:bg-gray-800 transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                                <img src="/images/dev_icon_w.png" alt="" className='w-6 h-6' />
                            </a>
                        </div>
                    </div>
                    <div className='md:w-[76%]'>
                        <form className="mt-3 md:mt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-4">
                                <input
                                    type="text"
                                    placeholder="Name *"
                                    className="bg-[hsla(0,0%,100%,.05)] px-3 py-[.55rem] rounded-md w-full text-white placeholder-gray-400 border border-[hsla(0,0%,100%,.15)] outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email *"
                                    className="bg-[hsla(0,0%,100%,.05)] px-3 py-[.55rem] rounded-md w-full text-white placeholder-gray-400 border border-[hsla(0,0%,100%,.15)] outline-none"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject *"
                                className="bg-[hsla(0,0%,100%,.05)] px-3 py-[.55rem] rounded-md w-full text-white placeholder-gray-400 border border-[hsla(0,0%,100%,.15)] mt-8 md:mt-10 outline-none"
                            />
                            <textarea
                                placeholder="Your message *"
                                className="bg-[hsla(0,0%,100%,.05)] px-3 py-[.55rem] rounded-md w-full h-32 text-white placeholder-gray-400 border border-[hsla(0,0%,100%,.15)] mt-8 md:mt-10 outline-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="mt-6 w-full  py-3 bg-blue-500  rounded-full border-[2px] border-blue-500 hover:bg-black hover:border-white transition-all duration-[.35s] ease-linear text-lg font-semibold outline-none"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                        {/* Contact Details */}
                        <div className='md:hidden mt-10'>
                            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0" className='break-words'>
                                <label className="text-white opacity-75 text-sm font-[400] uppercase">Write an E-mail</label>
                                <p className="overflow-hidden text-white opacity-80 text-[20px] font-bold mt-1"><a href="mailto:folagbadeolowofela05@gmail.com">folagbade <br /> olowofela05 <br /> @gmail.com</a></p>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100" className='mt-6'>
                                <label className="text-white opacity-75 text-sm font-[400] uppercase">Call</label>
                                <p className="text-white opacity-80 text-[20px] font-bold mt-1"><a href="tel:+234 806 657 3156">+234 806 657 3156</a></p>
                            </div>
                        </div>
                        {/* Social Icons */}
                        <div data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300" className="md:hidden gap-2 mt-5">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/folagbade-olowofela" className="relative inline-flex items-center justify-center bg-[#1275b1] border-2 border-white h-[46px] w-[46px] rounded-full text-white hover:bg-blue-500 transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--fa-brands" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                            </a>
                            {/* Github */}
                            <a href="https://github.com/Marvel-Deone" className="relative inline-flex items-center justify-center bg-[#181717] border-2 border-white h-[46px] w-[46px] ml-2 rounded-full text-white hover:bg-gray-800 transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385c.6.111.793-.26.793-.577v-2.162c-3.338.726-4.042-1.416-4.042-1.416c-.546-1.385-1.333-1.754-1.333-1.754c-1.089-.744.083-.729.083-.729c1.205.085 1.84 1.24 1.84 1.24c1.07 1.834 2.809 1.304 3.494.996c.108-.775.42-1.304.763-1.604c-2.665-.303-5.467-1.334-5.467-5.93c0-1.311.469-2.384 1.236-3.222c-.124-.303-.535-1.527.117-3.182c0 0 1.007-.322 3.3 1.23c.957-.266 1.98-.398 3-.403c1.02.005 2.043.137 3 .403c2.292-1.552 3.297-1.23 3.297-1.23c.653 1.655.242 2.88.12 3.182c.77.838 1.235 1.911 1.235 3.222c0 4.609-2.807 5.624-5.479 5.921c.431.372.815 1.103.815 2.222v3.293c0 .32.19.693.8.575C20.565 21.797 24 17.303 24 12C24 5.373 18.627 0 12 0"></path>
                                </svg>
                            </a>
                            {/* Dev.to */}
                            <a href="https://dev.to/folagbade_olowofela" className="relative inline-flex items-center justify-center bg-[#0A0A0A] border-2 border-white h-[46px] w-[46px] ml-2 rounded-full text-white hover:bg-gray-800 transition-all duration-[.3s] my-ease transform translate-y-1 hover:transform hover:translate-y-[-5%]">
                                <img src="/images/dev_icon_w.png" alt="" className='w-6 h-6' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
