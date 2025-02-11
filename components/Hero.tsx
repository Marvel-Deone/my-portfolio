import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react';

const Hero = () => {
    const [showCursor, setShowCursor] = useState(true);
    const texts = ["DEV", "DEVELOPER"];
    const [displayedText, setDisplayedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [characterIndex, setCharacterIndex] = useState(0);
    const [isErasing, setIsErasing] = useState(false);
  
    const typingSpeed = 100;
    const erasingSpeed = 100;
    const pauseBetweenCycles = 1000;
  
    useEffect(() => {
      const typeWriter = () => {
        if (textIndex >= texts.length) {
          // Hide the cursor when the last text is complete
          setShowCursor(false);
          return;
        }
  
        if (!isErasing && characterIndex < texts[textIndex].length) {
          // Typing phase
          setDisplayedText((prev) => prev + texts[textIndex].charAt(characterIndex));
          setCharacterIndex((prev) => prev + 1);
        } else if (isErasing && displayedText.length > 0) {
          // Erasing phase
          setDisplayedText((prev) => prev.slice(0, -1));
        } else if (!isErasing && characterIndex === texts[textIndex].length) {
          // Pause after typing the word
          if (textIndex >= texts.length - 1) {
            setTimeout(() => {
              setShowCursor(false)
            }, 1000)
          }
          if (textIndex < texts.length - 1) {
            setTimeout(() => setIsErasing(true), pauseBetweenCycles);
          }
        } else if (isErasing && displayedText.length === 0) {
          // Move to the next word
          setIsErasing(false);
          setCharacterIndex(0);
          setTextIndex((prev) => prev + 1);
        }
      };
  
      const timer = setTimeout(typeWriter, isErasing ? erasingSpeed : typingSpeed);
      return () => clearTimeout(timer);
    }, [displayedText, isErasing, characterIndex, textIndex, texts]);

    return (
        <section className='w-full bg-gradient-to-r from-[#041c32] from-40% to-[#050c16]'>
            <div className='w-full h-full lg:max-w-[82rem] flex flex-col mx-auto mb-2 px-[.85rem] md:px-[2.1rem] lg:px-[4rem] 2xl:px-0'>
                <div className='flex flex-col lg:flex-row xl:gap-[3.8rem] mt-16 lg:mt-36 xl:mt-[3.8rem]'>
                    {/* Text Content */}
                    <div className='flex flex-col lg:items-start 2xl:space-y-6 tracking-wide transform mt-[4rem] xl:mt-[10rem] 2xl:mt-[11rem]'>
                        <span className="mb-1 lg:mb-0 inline whitespace-nowrap text-white w-auto px-[12px] py-[5px] rounded-[4px] uppercase tracking-widest text-[16px] bg-[#063560]" style={{
                            inlineSize: "fit-content"
                        }} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">Folagbade Olowofela</span>
                        <div className='flex flex-col lg:gap-4'>
                            <h1 className="mb-[.75rem] lg:mb-0 text-[38px] md:text-[45px] xl:text-[60px] font-bold uppercase" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
                                Hay! I'm <span className="">Folagbade</span>
                            </h1>
                            <div className="mb-4 2xl:mb-0 mt-[-1rem] xl:mt-[-1.5rem] typewriter text-[38px] md:text-[45px] xl:text-[65px] text-[#0788FF] uppercase font-semibold" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1200">I'm a <span className="typewriter-text">{displayedText}</span>{showCursor && <label htmlFor="" className='blink'>|</label>}</div>
                        </div>
                        <p className="text-white text-[16px] md:text-[18px] font-[500] lg:w-[30rem] xl:w-[37rem] leading-7" data-aos="flip-down" data-aos-duration="1500" data-aos-delay="1400">
                            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
                        </p>
                        <div className="mt-8 lg:mt-4 flex flex-col md:flex-row gap-6 items-center" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1600">
                            <button className="w-full md:w-auto text-center justify-center md:text-start uppercase flex md:justify-between items-center bg-blue-500 text-[white] font-[500] px-[28px] py-[14px] rounded-full border-[2px] border-blue-500 hover:bg-black hover:border-white transition-all duration-[.35s] ease-linear">
                                <span>Get in Touch</span>
                                <i className="flex ml-3"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--bi" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></i>
                            </button>

                            {/* Social Icons */}
                            <div className="flex space-x-2" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1800">
                                <a href="#" className="social-icon bg-blue-600 p-3 rounded-full hover:bg-blue-700 border-2 border-white transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                                    {/* Facebook Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="iconify iconify--fa-brands" width="1em" height="1em" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                                </a>
                                <a href="#" className="social-icon bg-pink-600 p-3 rounded-full hover:bg-pink-700 border-2 border-white transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                                    {/* Dribbble Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="iconify iconify--fa-brands" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248s248-111.252 248-248S392.748 8 256 8m163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955c-6.984-1.477-77.018-15.682-147.502-6.818c-5.752-14.041-11.181-26.393-18.617-41.614c78.321-31.977 113.818-77.482 118.284-83.523M396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519c-34.712-63.776-73.185-116.168-79.04-124.008c67.176-16.193 137.966 1.27 190.061 47.489m-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509c-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62M44.17 256.323c0-2.166.043-4.322.108-6.473c9.268.19 111.92 1.513 217.706-30.146c6.064 11.868 11.857 23.915 17.174 35.949c-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323m81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756c29.74 77.283 42.039 142.053 45.189 160.638c-68.112 29.013-150.015 21.053-212.768-27.882m248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033c66.38-10.626 124.7 6.768 131.947 9.055c-9.442 58.941-43.273 109.844-90.795 141.978"></path></svg>
                                </a>
                                <a href="#" className="social-icon bg-[#1275b1] p-3 rounded-full hover:bg-blue-500 border-2 border-white transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                                    {/* LinkedIn Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--fa-brands" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="flex justify-center items-center pr-7 md:px-0 xl:mt-[3rem] 2xl:mt-[4rem]" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="800">
                        <div className="md:w-[590px] md:h-[580px] lg:w-[400px] lg:h-[400px] xl:w-[470px] xl:h-[470px] 2xl:w-[590px] 2xl:h-[575px] image-container mt-16 lg:mt-0 xl:mt-12 ml-8 rounded-full overflow-hidden box-shadow ">
                            <Image
                                src="/images/my-profile.png"
                                alt="Folagbade Olowofela"
                                width={618}
                                height={600}
                                className="w-auto h-auto md:w-[590px] md:h-[580px] lg:w-auto lg:h-auto xl:h-[470px] 2xl:w-[590px] 2xl:h-[575px] rounded-full shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
