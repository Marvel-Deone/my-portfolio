import React from 'react'
import { FaPen, FaCode, FaBullhorn, FaPalette, FaStar } from "react-icons/fa";

const MyServices = () => {
    const services = [
        {
            title: "Website Design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            icon: <FaPen className="text-white" />,
            image: "/images/service-01.jpg",
            rating: 5,
        },
        {
            title: "Website Development",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            icon: <FaCode className="text-white" />,
            image: "/images/service-02.jpg",
            rating: 4.5,
        },
        {
            title: "Mobile Development",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            icon: <FaBullhorn className="text-white" />,
            image: "/images/service-03.jpg",
            rating: 4,
        },
        {
            title: "Backend Development",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            icon: <FaPalette className="text-white" />,
            image: "/images/service-04.jpg",
            rating: 5,
        },
    ];

    return (
        <section className="bg-gradient-to-r from-[#07223a] from-50% to-[#040c16] py-[3.5rem] md:py-[5rem] lg:py-[6rem] px-[.85rem] md:px-[2.1rem] lg:px-[4rem] 2xl:px-0 overflow-hidden">
            <div className="w-full lg:max-w-[82rem] mx-auto flex flex-col lg:gap-10">
                {/* Section Title */}
                <div className='flex flex-col lg:gap-2'>
                    <span
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                        className="font-[500] mb-2 lg:mb-0 inline whitespace-nowrap text-white w-auto px-[12px] py-[4px] rounded-[4px] uppercase tracking-[0.3rem] text-[16px] bg-[#063560]"
                        style={{ inlineSize: "fit-content" }}
                    >
                        SERVICES
                    </span>
                    <h1 className="mb-4 lg:mb-0 text-[33px] md:text-[40px] font-bold uppercase leading-[2.8rem] md:leading-[3rem]">
                        THE DEVELOPMENT <span className='text-[#0788FF]'>SERVICES</span> I OFFER
                    </h1>
                </div>

                {/* Services Grid */}
                <div data-aos="fade-left" data-aos-duration="1200" data-aos-delay={100} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[1.65rem] lg:gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative mt-[20px] lg:mt-0 bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform ease duration-300"
                        >
                            {/* Background Image */}
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-[370px] object-cover opacity-80"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                            {/* Card Content */}
                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <div className="flex items-center gap-2">
                                    <div className="bg-blue-500 p-2 rounded-lg">{service.icon}</div>
                                    <h3 className="text-white font-bold text-lg">{service.title}</h3>
                                </div>
                                <p className="text-gray-300 text-sm mt-2">{service.description}</p>

                                {/* Star Ratings */}
                                {/* <div className="flex mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`text-yellow-400 ${i + 1 > service.rating ? "opacity-50" : ""}`}
                                        />
                                    ))}
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MyServices
