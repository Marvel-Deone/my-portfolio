import Image from 'next/image'
import React from 'react'

type SectionProps = {
    id?: string;
};

const About: React.FC<SectionProps> = ({ id }) => {
    return (
        <section id={id} className='bg-gradient-to-r from-[#041c32] from-40% to-[#050c16] relative md:mt-14 lg:mt-[4.5rem]'>
            <div className='bg-gradient-to-r from-[#052442] from-40% to-[#051a2f]'>
                <div className='relative w-full lg:max-w-[82rem] flex flex-col mx-auto px-[.85ren] md:px-[2.1rem] lg:px-[4rem] 2xl:px-0 z-[1]'>
                    <div className="hidden lg:flex rotating-object-1 absolute bottom-[10px] left-0 z-[-1] ml-12 2xl:ml-0">
                        <Image src="/images/effect-1.svg" alt='effect-1' data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="400" width={339} height={369} />
                    </div>
                    <div className="hidden lg:flex rotating-object-2 absolute right-[20px] 2xl:right-[-60px] top-[80px] z-[-1]">
                        <Image src="/images/effect-2.svg" alt='effect-1' data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="400" width={151} height={151} />
                    </div>
                    <div className='w-full flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-center px-3 md:px-0 py-[5rem] lg:py-[6rem]'>
                        {/* About Banner */}
                        <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500" className='w-full lg:w-1/2 2xl:pl-32'>
                            <div className='flex items-center justify-center h-[340px] lg:h-[450px] xl:w-[450px] bg-[#1e364b] rounded-[20px] overflow-hidden'>
                                <Image src="/images/about-bg.webp" alt='about-banner' width={450} height={450} />
                            </div>
                        </div>
                        {/* About Text */}
                        <div data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="400" className="w-full lg:w-1/2 lg:px-12">
                            <div className='flex flex-col lg:gap-4'>
                                <span className="mb-2 lg:mb-0 inline whitespace-nowrap text-white w-auto px-[12px] py-[4px] rounded-[4px] uppercase tracking-[0.3rem] text-[16px] bg-[#063560]" style={{
                                    inlineSize: "fit-content"
                                }}>ABOUT ME</span>
                                <h1 className="mb-6 lg:mb-0 text-[35px] md:text-[40px] font-bold uppercase leading-[2.8rem] md:leading-[3rem]">
                                    I AM AVAILABLE FOR <span className="text-[#0788FF]">WEB & MOBILE</span> DEVELOPMENTS
                                </h1>
                                <p className='mb-7 text-[16px] text-[#ffffff] leading-relaxed'>I am a passionate full-stack developer who loves building seamless user experiences and efficient backend systems. I enjoy turning ideas into functional, scalable applications with clean and maintainable code. Beyond web development, I’m always exploring new technologies to enhance my problem-solving approach and deliver impactful solutions.</p>
                                <div>
                                    <a href="#contact">
                                        <button className="text-center justify-center md:text-start uppercase flex md:justify-between items-center bg-blue-500 text-[white] font-[500] px-[28px] py-[14px] rounded-full border-[2px] border-blue-500 hover:bg-black hover:border-white transition-all duration-[.35s] ease-linear">
                                            <span>Get in Touch</span>
                                            <i className="flex ml-3"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--bi" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
