import React from 'react'

const Experience = () => {
    const experiences = [
        {
            title: "Front-end Developer",
            company: "WELAB",
            location: "REMOTE",
            duration: "JAN 2019 - PRESENT",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
        {
            title: "Front-end Developer",
            company: "WELAB",
            location: "REMOTE",
            duration: "JAN 2019 - PRESENT",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
        {
            title: "Front-end Developer",
            company: "WELAB",
            location: "REMOTE",
            duration: "JAN 2019 - PRESENT",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
    ];

    return (
        <section className="bg-gradient-to-r from-[#05294a] from-40% to-[#05192e] py-[3.5rem] md:py-[5rem] lg:py-[6rem] px-[.85rem] md:px-[2.1rem] lg:px-[4rem] 2xl:px-0">
            <div className="w-full lg:max-w-[82rem] mx-auto flex flex-col gap-4 md:gap-6 lg:gap-10">
                {/* Experience Title */}
                <div className='flex flex-col lg:gap-2'>
                    <span
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                        className="font-[500] mb-2 lg:mb-0 inline whitespace-nowrap text-white w-auto px-[12px] py-[4px] rounded-[4px] uppercase tracking-[0.3rem] text-[16px] bg-[#063560]"
                        style={{ inlineSize: "fit-content" }}
                    >
                        EXPERIENCE
                    </span>
                    <h1 className="mb-6 lg:mb-0 text-[35px] md:text-[40px] font-bold uppercase leading-[2.8rem] md:leading-[3rem]">
                        MY WORK <span className='text-[#0788FF]'>EXPERIENCE</span>
                    </h1>
                </div>
                <div className="space-y-4">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            data-aos="fade-up" data-aos-duration="1200" data-aos-delay={index * 100}
                            className="bg-experiences p-6 rounded-lg flex flex-col md:flex-row items-start"
                        >
                            <div className="bg-blue-500 text-white px-5 py-4 lg:py-5 rounded-xl md:w-1/3 lg:w-1/4">
                                <h3 className="font-bold text-[21px] md:text-[22.704px] lg:text-[23.709px] leading-[1.2] mb-4 lg:mb-3">{exp.title}</h3>
                                <p className="text-sm opacity-80">{exp.company} | {exp.location}</p>
                                <p className="text-[16px] mt-1 mb-3 lg:mb-2">{exp.duration}</p>
                                <button className="bg-white text-black text-xs font-[500] px-4 py-1.5 mt-2 rounded-[30px] mb-1 lg:mb-0">
                                    FULL TIME
                                </button>
                            </div>
                            <div className="text-white md:w-2/3 lg:w-3/4 md:ml-6 mt-4 lg:mt-0">
                                <p className="font-semibold text-[28px] md:text-[32px]">About Company</p>
                                <p className="text-[16px] mt-1 opacity-80">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
