'use client'

import About from '@/components/About';
import Brand from '@/components/Brand';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import MyServices from '@/components/MyServices';
import MyWork from '@/components/MyWork';
import Image from 'next/image'
import { useEffect, useState } from 'react';

const Home = () => {
  const [open, setOpen] = useState(false);


  return (
    <main className='content w-full min-h-screen h-auto text-white flex flex-col flex-grow xl:p-0'>
      {/* Desktop Navbar */}
      <header className="my-nav w-full fixed top-0 left-0 z-[1000] transition-all duration-[.6s]">
        <nav className="bg-transparent z-[1000] mx-auto max-w-[82rem] flex justify-between py-5 items-center top-0 left-0 w-full transition duration-[.6s] px-[.85rem] md:px-[1rem] lg:px-[4rem] xl:px-[4rem] 2xl:px-0">
          <div className="text-[1.5rem] md:text-[2rem] xl:text-[2.5rem] font-bold tracking-wide cursor-pointer" data-aos="zoom-in" data-aos-duration="1500">
            <span className="text-blue-400">F</span>OLAGBADE
          </div>
          <div className='hidden lg:flex gap-[4.2rem]'>
            <ul className="flex items-center space-x-6 relative uppercase transition-all duration-[.4s] ease">
              <li className="hover:text-white cursor-pointer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="50"><a href="" className="relative transition duration-300 font-[500] links-before">Home</a></li>
              <li className="hover:text-white cursor-pointer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100"><a href="" className="relative transition duration-300 font-[500] links-before">About Me</a></li>
              <li className="hover:text-white cursor-pointer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="150"><a href="" className="relative transition duration-300 font-[500] links-before">Projects</a></li>
              <li className="hover:text-white cursor-pointer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200"><a href="" className="relative transition duration-300 font-[500] links-before">Services</a></li>
            </ul>

            <div className='flex items-center' data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
              <button className="hidden lg:flex uppercase bg-blue-500 px-[30px] py-[13px] rounded-full border-[2px] border-blue-500 hover:bg-black hover:border-white transition-all duration-[.35s] ease-linear">
                Let's Talk
              </button>
            </div>
          </div>
          {/* Menu Icon */}
          {!open ? <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" className="lg:hidden bg-transparent border border-[#373d45] py-1 md:py-2 px-4 rounded-md cursor-pointer absolute right-[15px] top-[19px]" onClick={() => setOpen(true)}>
            <i className="fa-solid fa-bars text-[20px]"></i>
          </div> : <div className="lg:hidden bg-transparent border border-[#373d45] py-1 md:py-2 px-4 rounded-md cursor-pointer absolute right-[15px] top-[19px]" onClick={() => setOpen(false)}>
            <i className=" fa-solid fa-xmark text-[20px] mt-1"></i>
          </div>}
        </nav>
      </header>
      {/* Mobile Nav */}
      {open && <nav className='lg:hidden z-[1000] fixed top-[%] bg-[#040c16] border-t border-[hsla(0,0%,100%,.2)] transform translate-y-[0px] w-full h-auto backdrop-boxShadow'>
        <div className='absolute bg-[#040c16] w-full py-[10px] px-[20px]'>
          <a href="" className="flex text-white py-[15px] px-0 items-center transition-all duration-[0.2s] ease-linear links-before uppercase">Home</a>
          <a href="" className="flex text-white py-[15px] px-0 items-center transition-all duration-[0.2s] ease-linear links-before uppercase">About Me</a>
          <a href="" className="flex text-white py-[15px] px-0 items-center transition-all duration-[0.2s] ease-linear links-before uppercase">Projects</a>
          <a href="" className="flex text-white py-[15px] px-0 items-center transition-all duration-[0.2s] ease-linear links-before uppercase">Service</a>
          <a href="" className="flex text-white py-[15px] px-0 items-center transition-all duration-[0.2s] ease-linear links-before uppercase">Contact</a>
        </div>
      </nav>}

      <Hero />
      <About />
      <MyWork />
      <MyServices />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

// 

export default Home;
