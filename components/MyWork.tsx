import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef } from 'react';

const projects = [
    {
        id: 1,
        title: "Website Design",
        category: "Web Design, App Design",
        image: "/images/popup-project-1.jpg",
    },
    {
        id: 2,
        title: "Website Design",
        category: "Web Design, App Design",
        image: "/images/popup-project-2.jpg",
    },
    {
        id: 3,
        title: "Dashboard Design",
        category: "Web Design, App Design",
        image: "/images/popup-project-3.jpg",
    },
    {
        id: 4,
        title: "Mobile App Design",
        category: "Web Design, App Design",
        image: "/images/popup-project-4.jpg",
    },
    {
        id: 5,
        title: "Website Design",
        category: "Web Design, App Design",
        image: "/images/popup-project-5.jpg",
    },
    {
        id: 6,
        title: "Website Design",
        category: "Web Design, App Design",
        image: "/images/popup-project-6.jpg",
    },
];

const projectsPerPage = 3;
const totalPages = Math.ceil(projects.length / projectsPerPage);

const MyWork = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [previewImg, setPreviewImg] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleOpen = (previewImg: string) => {
        setPreviewImg(previewImg);
        setIsOpen(true);
    };
    const handleClose = () => setIsOpen(false);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current!.offsetLeft);
        setScrollLeft(sliderRef.current!.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current!.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current!.scrollLeft = scrollLeft - walk;

        // Update the current page based on scroll position
        const newPage = Math.floor(sliderRef.current!.scrollLeft / sliderRef.current!.offsetWidth);
        setCurrentPage(newPage);
    };

    const handlePaginationClick = (pageIndex: number) => {
        setCurrentPage(pageIndex);
        setScrollLeft(0); // Reset the scroll position
    };

    return (
        <section className='bg-gradient-to-r from-[#062d4d] from-50% to-[#051a2f] w-full flex flex-col mx-auto py-[6rem] px-[1.5rem] md:px-[2.1rem] lg:px-[4rem] 2xl:px-0'>
            <div className='w-full lg:max-w-[82rem] flex flex-col mx-auto gap-10'>
                {/* Work title */}
                <div className='flex flex-col lg:gap-2'>
                    <span
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="200"
                        className="font-[500] mb-2 lg:mb-0 inline whitespace-nowrap text-white w-auto px-[12px] py-[4px] rounded-[4px] uppercase tracking-[0.3rem] text-[16px] bg-[#063560]"
                        style={{ inlineSize: "fit-content" }}
                    >
                        MY WORK
                    </span>
                    <h1 className="mb-6 lg:mb-0 text-[35px] md:text-[40px] font-bold uppercase leading-[2.8rem] md:leading-[3rem]">
                        RECENT PROJECTS
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100"
                            key={project.id}
                            className="relative bg-white rounded-xl overflow-hidden px-3 py-4 transition-all duration-500 ease-in-out hover:shadow-lg"
                        >
                            <div className="relative group w-full h-64 overflow-hidden rounded-md cursor-pointer"
                                onMouseEnter={() => setHoveredId(project.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                onClick={() => handleOpen(project.image)}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className={`rounded-lg scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out ${hoveredId === project.id ? "opacity-50" : ""}`}
                                />
                                {hoveredId === project.id && (
                                    <div className="absolute bg-black/50 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out inset-0 flex items-center justify-center">
                                        <div className="bg-white p-2 rounded-full shadow-md text-[35px]">
                                            <i><svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" role="img" className="iconify iconify--bi text-black" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path></svg></i>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="px-2">
                                <h3 className="mt-4 text-[20px] font-semibold text-black">{project.title}</h3>
                                <p className="text-gray-500 text-sm mt-1">{project.category}</p>
                                <div className="absolute bottom-4 right-4 bg-blue-500 border-2 border-black text-white flex justify-center rounded-full h-[45px] w-[45px] items-center text-[20px] cursor-pointer hover:bg-black transition-all duration-[.35s] ease-linear"><Link href="">➜</Link></div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Slider Container */}
                {/* <div
          className="overflow-hidden"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="min-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {projects
                  .slice(
                    pageIndex * projectsPerPage,
                    pageIndex * projectsPerPage + projectsPerPage
                  )
                  .map((project) => (
                    <div
                      key={project.id}
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      data-aos-delay="100"
                      className="relative bg-white rounded-xl overflow-hidden px-3 py-4 transition-all duration-500 ease-in-out hover:shadow-lg"
                    >
                      <div
                        className="relative group w-full h-64 overflow-hidden rounded-md cursor-pointer"
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => handleOpen(project.image)}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className={`rounded-lg scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out ${hoveredId === project.id ? "opacity-50" : ""}`}
                        />
                        {hoveredId === project.id && (
                          <div className="absolute bg-black/50 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out inset-0 flex items-center justify-center">
                            <div className="bg-white p-2 rounded-full shadow-md text-[35px]">
                              <i>
                                <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" role="img" className="iconify iconify--bi text-black" width="1em" height="1em" viewBox="0 0 16 16">
                                  <path fill="currentColor" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                                </svg>
                              </i>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="px-2">
                        <h3 className="mt-4 text-[20px] font-semibold text-black">{project.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">{project.category}</p>
                        <div className="absolute bottom-4 right-4 bg-blue-500 border-2 border-black text-white flex justify-center rounded-full h-[45px] w-[45px] items-center text-[20px] cursor-pointer hover:bg-black transition-all duration-[.35s] ease-linear">
                          <Link href="">➜</Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div> */}

                {/* Pagination Dots */}
                {/* <div className="flex justify-center mt-8 space-x-3">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`w-3 h-3 rounded-full border transition-all duration-[.55s] ${currentPage === index ? "border-white bg-blue-500 w-[23px]" : "border-white"}`}
            />
          ))}
        </div> */}
            </div>

            {/* Modal for Large Image Preview */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-[1000]">
                    <div className="relative">
                        {/* Large Image */}
                        <img
                            src={previewImg}
                            alt="Large Preview"
                            className="max-w-[90vw] max-h-[90vh] rounded-lg"
                        />
                        {/* Close Icon */}
                        <button className="absolute top-3 right-3" onClick={handleClose}>
                            <i className="fa-solid fa-xmark text-[#838383] text-[20px] transition-all duration-300 ease-in hover:text-red-500 mt-1"></i>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MyWork;
